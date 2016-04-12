import React from 'react';
import ReactDOM from 'react-dom';
// require("./styles.scss");
import Header from "./components/Header";


class Layout extends React.Component {
	
	render() {
		return (
			<div>
				<Header/>
			</div>	
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);