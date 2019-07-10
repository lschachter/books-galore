import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SearchBox from ".././components/SearchBox"
import BookSet from ".././components/BookSet"

describe('<SearchBox />', () => {
	it('initially renders without a <BookSet /> or error message', () => {
		const wrapper = shallow(<SearchBox />);
		expect(wrapper.exists(BookSet)) === false;
		expect(wrapper.find('#no-books-msg')) === false;
	});

	it('renders with a <Bookset /> and no books img when state requires', () => {
		const wrapper = shallow(<SearchBox />);
		wrapper.setState({
			books: {}
		});
		expect(wrapper.exists(BookSet));

		wrapper.setState({
			numBooks: 0
		});
		expect(wrapper.find('#no-books-msg'));
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