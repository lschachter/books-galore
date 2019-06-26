import React , {Component} from 'react';

export default class BookTile extends React.Component {
	constructor(props) {
    super(props);
		let {title, imgs, url} = this.props.book.volumeInfo;
		let alt = title + " front cover";
	}

	render() {
		return (
			<li className="book-tile">
				<a 
					href={this.url}
					target = "_blank"
          rel="noopener noreferrer">
					<img src={this.imgs !== undefined ? this.imgs.thumbnail : ""} 
					alt={this.alt}/>
				</a>
				<h5><a href={this.url}>{this.title}</a></h5>
				<p>By: {this.author}</p>
			</li>
		)
	}
}
