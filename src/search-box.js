import React from "react"

import BookSet from "./book-set"
import { search } from "./utilities/google_books_search";

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

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.searchTopic === "") {
    	alert(`Please enter a topic to search`);
    }
    else {
    	search(this.state.searchTopic, 0)
        .then(books_json =>
          this.setState({
            books: books_json.items
          }))
        .catch(err => console.log(err));
    }
  }

  // this should send books back up to app, not logical parent for book set
  render() {
    const books_received = this.state.books !== undefined;
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

        {books_received ? (
          <BookSet books={this.state.books} searchTopic={this.state.searchTopic} />
          ) : (
          <div></div>
          )
        }
	      
	    </div>
    )
  }
}
