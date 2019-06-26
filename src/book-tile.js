import React from 'react';

export default class BookTile extends React.Component {
	render() {
		let book_info = this.props.book.volumeInfo;
		let alt = book_info.title + " front cover";
		console.log(parseInt(this.props.key_i) % 2);

		let authors = book_info.authors;
		if (authors.length > 1) {
			authors = authors.join(", ");
		}

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
				<p><a href={book_info.infoLink}>{book_info.title}</a></p>
				<p className="title-text"><strong>By: </strong>{authors}</p>
				<p><strong>Publisher: </strong>{book_info.publisher}</p>
			</div>
		)
	}
}
