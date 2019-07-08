import React from 'react';

import BookTile from "./BookTile"
import { search } from "./utilities/search";

export default class BookSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: props.startIndex,
      books: props.books,
      numBooks: props.numBooks
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = e => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = e => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Needed because startIndex and books can change on parentComponent submit
  //  OR scroll to bottom
  componentWillReceiveProps = newProps => {
    this.setState({
      startIndex: newProps.startIndex,
      books: newProps.books,
      numBooks: newProps.numBooks
    });
  }

  filterBooks = books => {
    return [
      ...new Map (
        books.map(book =>
          [book.id, book]
        )
      ).values()
    ]
  }

  handleScroll = e => {
    let container = e.target.body;
    if (window.innerHeight + window.pageYOffset === container.scrollHeight) { 
      search(this.props.searchTopic, this.state.startIndex)
        .then(booksJson => {
          let numNewBooks = booksJson.totalItems;
          let newBookSet = numNewBooks > 0 ? 
            this.filterBooks(this.state.books.concat(booksJson.items)) : this.state.books;
          this.setState({
            books: newBookSet,
            startIndex: this.state.startIndex + 10,
            numBooks: numNewBooks
          })
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return ( 
      <div className="book-set">
        {
          this.state.books.map((book, i) => {
            return (
              <BookTile book={book} key={book.id} />
            );
          })
        }
        {
          this.state.numBooks < 10 &&
          <p>These are all the books on {this.props.searchTopic} we could find. Check out a new topic!</p>
        }
      </div>
    );
  }
}