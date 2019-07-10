import React from 'react';

import { cropInfoStr } from ".././utilities/cropInfoStr";

export default class BookTile extends React.Component {
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

		// trunc for truncated content 
		let truncTitle = cropInfoStr(bookInfo.title, 28);
		let truncAuthors = cropInfoStr(authors, 25);
		let truncPubs = cropInfoStr(bookInfo.publisher, 18);

		let hasImg = bookInfo.imageLinks !== undefined;

		if (hasImg) {
			let imgURL = bookInfo.imageLinks.thumbnail;
			imgURL.replace('http', 'https');
		}

		return (
			<div className="book-tile">
				<a href={bookInfo.infoLink}
					target = "_blank"
          rel="noopener noreferrer">
          { hasImg ? ( 
          	<div className="book-img-container">
							<img 
								src={bookInfo.imageLinks.thumbnail} 
								alt={alt}
							/>
						</div>
						) : (
	            <div className="no-img">
	            	<p>No image avaiable</p>
	            </div>
	          )
          }
				</a>
				<div>
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
