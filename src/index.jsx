import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div> Hi React, how are you? </div>
			)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);