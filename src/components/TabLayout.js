import React from 'react';
import Tab from './Tab';

class TabLayout extends React.Component {
	
	render() {
		const tabEls = this.props.tabs.map((title, index) => <Tab key={index} title={title} />);
		return (
			<div>
				<ul>
					{tabEls}
				</ul>
			</div>
		)
	}
}

export default TabLayout;