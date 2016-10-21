import {red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import Navbar from './Navbar.jsx';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: red500,
	}
});

const Layout = React.createClass({
	render: function() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Navbar />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
});

export default Layout