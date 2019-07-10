import React from "react"

import BookSet from "./BookSet"
import { search } from ".././utilities/search";

export default class SearchBox extends React.Component {
	constructor(props) {
    super(props);
    // numBooks holds how many books the fetch returned, in case
    // message should be displayed of no books or later, no more books
    this.state = {
      searchTopic: "",
      numBooks: -1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;

    this.setState({
      searchTopic: value,
      numBooks: -1
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.searchTopic === "") {
    	alert(`Please enter a topic to search`);
    } else {
    	this.waitForInitialSearch();
    }
  }

  waitForInitialSearch = () => {
    search(this.state.searchTopic, 0)
      .then((booksJson) => 
        this.setState({
          books: booksJson.items,
          numBooks: booksJson.totalItems
        }))
      .catch(err => console.log(err));
  }

  // this should send books back up to app, not logical parent for book set
  render() {
    return (
    	<div>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          <input 
	          	type="text" 
	          	name="searchTopic"
              placeholder="Enter a topic"
	          	value={this.state.searchTopic}
	          	onChange={this.handleChange} 
	          />
	        </label>
	        <button type="submit">Submit</button>
	      </form>
        {
          this.state.numBooks === 0 &&
          <p id="no-books-msg">Sorry, we couldn't find any books on '{this.state.searchTopic}'. Check out a different topic instead!</p>
        }
        { 
          this.state.books && 
          <BookSet books={this.state.books} searchTopic={this.state.searchTopic}
          startIndex={10}/>
        }  
	    </div>
    )
  }
}
