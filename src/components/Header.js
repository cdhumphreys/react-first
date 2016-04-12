import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.name = "Carl";
	}
	render () {
		return (<div> Oh hey there {this.name} </div>);
	}
	
}

export default Header;