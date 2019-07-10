import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import BookSet from ".././components/BookSet";
import exampleData from "./exampleData.json";

describe('<BookSet />', () => {
	it('renders successfully', () => {
		const wrapper = shallow(<BookSet books={exampleData.data} startIndex={10} searchTopic="hello" numBooks={10}/>);
		expect(wrapper.find('#no-more-books-msg')) === false;
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

	*/
});