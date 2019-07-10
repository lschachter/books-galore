import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BookTile from ".././components/BookTile";
import exampleData from "./testData/exampleData.json";

describe('<BookTile />', () => {
	it('renders successfully', () => {
		let data = exampleData.data;
		let book = data[0];
		const wrapper = shallow(<BookTile book={book} key={book.id}/>);
		expect(wrapper.find({key: book.id}));
	});

	it('renders correctly without image', () => {
		let data = exampleData.data;
		// second book has no image files
		let book = data[1];
		const wrapper = shallow(<BookTile book={book} key={book.id}/>);
		expect(wrapper.find(".no-img"));
	});
});