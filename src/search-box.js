import PropTypes from "prop-types"
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
    	this.search().then(books_json => {
          this.setState({
            books: books_json
          });
          console.log("state: ", this.state.books);
        })
        .catch(err => console.log(err));
    }
  }

  search = async () => {
    let topic = this.state.searchTopic;
    const api_key = `${process.env.REACT_APP_GBA_API_KEY}`;
    const api_url = "https://www.googleapis.com/books/v1/volumes?q=" + topic + "&key=" + api_key;
    const response = await fetch(api_url);
    const books_json = await response.json();

    console.log('url: ', api_url);
    console.log(books_json);

    if (response.status !== 200) throw Error(books_json.message);
    return books_json;
  }

  

  render() {
    return (
    	<div>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Search Topic
	          <input 
	          	type="text" 
	          	name="searchTopic"
	          	value={this.state.searchTopic}
	          	onChange={this.handleChange} 
	          />
	        </label>
	        <button type="submit">Submit</button>
	      </form>
	      <BookSet books={this.state.books} />
	    </div>
    )
  }
}





