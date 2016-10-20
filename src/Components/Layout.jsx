import React from 'react';

import Navbar from './Navbar.jsx';

const Layout = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
				{this.props.children}
			</div>
		)
	}
});

export default Layout