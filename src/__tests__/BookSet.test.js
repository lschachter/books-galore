import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BookSet from ".././components/BookSet";
import BookTile from ".././components/BookTile";
import exampleData from "./testData/exampleData.json";

describe('<BookSet />', () => {
	it('renders successfully', () => {
		const wrapper = shallow(<BookSet books={exampleData.data} startIndex={10} searchTopic="hello"/>);
		expect(wrapper.find('#no-more-books-msg')) === false;
		expect(wrapper.exists(BookTile));
	});

	it('renders successfully with no more books message', () => {
		const wrapper = shallow(<BookSet books={exampleData.data} startIndex={10} searchTopic="hello"/>);
		wrapper.setState({
			numBooks: 5
		});
		expect(wrapper.find('#no-more-books-msg'));
	});

	//~~~~~~~~~~~~~~~~~~~~~FUTURE TESTS~~~~~~~~~~~~~~~~~~~~~~~~//

	/*
	it('handles change correctly', () => {

	});

	it('handles submit correctly', () => {

	});

	it('waits for search correctly', () => {
	
	});

	it('rerenders on componentWillReceiveProps correctly', () => {
	
	});

	it('allows for infinite scroll even if screen is giant', () => {
	
	});

	it('handles a single book correctly', () => {
	
	});

	*/
});