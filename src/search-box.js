import PropTypes from "prop-types"
import React from "react"

import BookTile from "./book-tile"


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
    				books: books_json
    			}))
    		.catch(err => console.log(err));
    }
  }

  /*search = event => {
  	let topic = this.state.searchTopic;
  	console.log(topic);
  	const api_url = "https://www.googleapis.com/books/v1/volumes?q=" + topic;

  	fetch(api_url, {method: "GET"}).then(response => response.json())
  		.then(json => {
  			let {books} = json;
  			this.setState({ books: books });
  			
  		});
		console.log(this.state.books);
  }*/

  search = async () => {
  	const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTopic);
  	const books_json = await response.json();

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
	      <ul>
	      	{this.state.books.map(book => 
	      		<BookTile {...book}/>
	      		)}
	      </ul>
	    </div>
    )
  }
}





