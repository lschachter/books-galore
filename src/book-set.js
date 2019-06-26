import React , {Component} from 'react';

import BookTile from "./book-tile"

export default class BookSet extends React.Component{
  render(){
    return (
      <div>
        {
          this.props.books.map((book, i) => {
            return (
              <BookTile book={book} key_i={i} />
            );
          })
        }
      </div>
    );
  }
}