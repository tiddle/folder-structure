import React from 'react';
import ReactDOM from 'react-dom';
import File from './file';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<File name="Name" size={1} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
