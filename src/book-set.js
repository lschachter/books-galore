import React from 'react';

import BookTile from "./book-tile"

export default class BookSet extends React.Component {
  constructor(props) {
    super(props)
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
      console.log("bottom!");
    }
  }

  render(){
    return ( 
      <div className="book-set">
        {
          this.props.books.map((book, i) => {
            return (
              <BookTile book={book} key={i} />
            );
          })
        }
      </div>
    );
  }
}