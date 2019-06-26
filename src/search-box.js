import React from "react"

import BookSet from "./book-set"

export default class SearchBox extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchTopic: "",
      books: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
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
    	this.search()
        .then(books_json =>
          this.setState({
            books: books_json.items
          }))
        .catch(err => console.log(err));
    }
  }

  search = async () => {
    let topic = this.state.searchTopic;
    const api_key = `${process.env.REACT_APP_GBA_API_KEY}`;
    const api_url = "https://www.googleapis.com/books/v1/volumes?q=" + topic + "&key=" + api_key;
    const response = await fetch(api_url);
    const books_json = await response.json();

    if (response.status !== 200) throw Error(books_json.message);
    return books_json;
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
          <BookSet books={this.state.books} />
          ) : (
          <div></div>
          )
        }
	      
	    </div>
    )
  }
}
