import React from 'react';

import BookTile from "./BookTile"
import { search } from ".././utilities/search";

export default class BookSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: props.startIndex,
      books: props.books,
      moreBooks: props.books.length >= 10 ? true : false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  // DidMount and WillUnmount allow for infinite scroll effect
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
      moreBooks: newProps.books.length >= 10 ? true : false
    });
  }

  // The API doesn't return books in exactly the same order.
  // this ensures each book (and thus it's key) is unique
  filterBooks = books => {
    return [
      ...new Map (
        books.map(book =>
          [book.id, book]
        )
      ).values()
    ]
  }

  // fetches new books and updates the startIndex accordingly on scroll to page-bottom
  handleScroll = e => {
    let container = e.target.body;
    if ((window.innerHeight + window.pageYOffset === container.scrollHeight) && 
      (this.state.books.length >= 10)) { 
      this.waitForSearch();
    }
  }

  waitForSearch = () => {
    search(this.props.searchTopic, this.state.startIndex)
      .then(booksJson => {
        let newBookSet = booksJson.items ? 
          this.filterBooks(this.state.books.concat(booksJson.items)) : this.state.books;
        this.setState({
          books: newBookSet,
          startIndex: this.state.startIndex + 10,
          moreBooks: booksJson.items ? true : false
        })
      })
      .catch(err => console.log(err));
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
          !this.state.moreBooks &&
          <p id="no-more-books-msg">
            These are all the books on {this.props.searchTopic} we could find. Check out a new topic!
          </p>
        }
      </div>
    );
  }
}