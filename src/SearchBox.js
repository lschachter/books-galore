import React from "react"

import BookSet from "./BookSet"
import { search } from "./utilities/search";

export default class SearchBox extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchTopic: "",
      books: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.searchTopic === "") {
    	alert(`Please enter a topic to search`);
    }
    else {
    	search(this.state.searchTopic, 0)
        .then((books_json) =>
          this.setState({
            books: books_json.items
          }))
        .catch(err => console.log(err)
      );
    }
  }

  // this should send books back up to app, not logical parent for book set
  render() {
    const books_received = this.state.books.length > 0;
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
        { books_received ? (
            <BookSet books={this.state.books} searchTopic={this.state.searchTopic}
            startIndex={10} />
          ) : (
            <div></div>
          )
        }  
	    </div>
    )
  }
}