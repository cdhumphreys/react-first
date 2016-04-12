import React from 'react';
import ReactDOM from 'react-dom';
// require("./styles.scss");
class Layout extends React.Component {
	constructor() {
		super();
		this.name = "Carl"
	}
	render() {
		return (
			<div> Hello {this.name}!</div>	
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);