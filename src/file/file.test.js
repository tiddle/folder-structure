import React from 'react';
import { shallow } from 'enzyme';
import File from './file';

it('renders without crashing', () => {
	shallow(<File name="Hello" size={1} />);
});
