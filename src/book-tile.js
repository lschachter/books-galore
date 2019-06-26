import React , {Component} from 'react';

export default class BookTile extends React.Component {
	render() {
		let book_info = this.props.book.volumeInfo;
		let alt = book_info.title + " front cover";

		return (
			<div className="book-tile" key={this.props.key_i}>
				<a 
					href={book_info.infoLink}
					target = "_blank"
          rel="noopener noreferrer"
          >
					<img src={book_info.imageLinks !== undefined ? book_info.imageLinks.thumbnail : ""} 
					alt={alt}/>
				</a>
				<h5><a href={book_info.infoLink}>{book_info.title}</a></h5>
				<p>By: {book_info.authors}</p>
				<p>Publisher: {book_info.publisher}</p>
			</div>
		)
	}
}
