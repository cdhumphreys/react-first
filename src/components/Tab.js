import React from 'react';

class Tab extends React.Component {	
	constructor() {
		super();
		this.state = {
			active: false
		};
	}
	

	
	render () {
		const tabStyles = {
			display: 'inline-block',
			position: 'relative',
			fontFamily: 'Roboto Condensed',
			margin: '0px',
			padding: '10px',
			backgroundColor: '#23ABD9',
			width: '100px',
			height: '50px',
			lineHeight: '50px',
			border: '1px black solid',
			boxShadow: '0 1px 3px #000'

		};
		const titleStyles = {
			width: '50px',			
			marginLeft: 'calc(50% - 25px)',		
			color: 'yellow'
		};



		return (
			<div style={tabStyles} isActive={this.state.active}> 
				<span style={titleStyles}> {this.props.title} </span>
			</div>);
	}
	
}

export default Tab;
