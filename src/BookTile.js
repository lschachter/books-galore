import React from 'react';

import { cropInfoStr } from "./utilities/cropInfoStr";

export default class BookTile extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	isHovering: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = e => {
  	this.setState({
  		isHovering: !this.state.isHovering
  	});
  }


	render() {
		let bookInfo = this.props.book.volumeInfo;
		let alt = bookInfo.title + " front cover";

		let authors = bookInfo.authors;
		if (authors === undefined) {
			authors = "";
		} else if (authors.length > 1) {
			authors = authors.join(", ");
		} else {
			authors = authors[0];
		}

		let truncTitle = cropInfoStr(bookInfo.title, 25);
		let truncAuthors = cropInfoStr(authors, 25);
		let truncPubs = cropInfoStr(bookInfo.publisher, 20);

		let fullInfo = bookInfo.title + "\nBy: " + authors + "\nPublisher: " + bookInfo.publisher;

		return (
			<div className="book-tile">
				<a className="with-tool-tip" 
					data-tooltip={bookInfo.title}
					href={bookInfo.infoLink}
					target = "_blank"
          rel="noopener noreferrer">
          { bookInfo.imageLinks !== undefined ? ( 
          	<div className="book-img-container">
							<img 
								src={bookInfo.imageLinks.thumbnail} 
								alt={alt}
							/>
						</div>
						) : (
	            <div></div>
	          )
          }
				</a>
				<div className="book-content-container with-tool-tip" data-tooltip={fullInfo}>
					<p>
						<a href={bookInfo.infoLink}
							target = "_blank"
          		rel="noopener noreferrer">
          		{truncTitle}
          	</a>
          </p>
					<p><strong>By: </strong>{truncAuthors}</p>
					<p><strong>Publisher: </strong>{truncPubs}</p>
				</div>
			</div>
		)
	}
}
