import React from 'react';

import BookTile from "./book-tile"
import { search } from "./utilities/google_books_search";

export default class BookSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: props.startIndex,
      books: props.books
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let container = e.target.body;
    if (window.innerHeight + window.pageYOffset === container.scrollHeight) { 
      search(this.props.searchTopic, this.state.startIndex)
        .then(books_json =>
          this.setState({
            books: this.state.books.concat(books_json.items),
            startIndex: this.state.startIndex + 10
          }))
        .catch(err => console.log(err));
    }
  }

  render(){
    return ( 
      <div className="book-set">
        {
          this.state.books.map((book, i) => {
            return (
              <BookTile book={book} key={i} />
            );
          })
        }
      </div>
    );
  }
}