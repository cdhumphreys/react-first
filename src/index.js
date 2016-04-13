import React from 'react';
import ReactDOM from 'react-dom';
// require("./styles.scss");
import TabLayout from "./components/TabLayout";


class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			tabs: [
				"Home",
				"Portfolio",
				"Archives",
				"About",
				"Contact"
			]
		};
	}
	
	render() {
		
		return (
			<div>
				<TabLayout tabs={this.state.tabs}/>
			</div>	
		)
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);