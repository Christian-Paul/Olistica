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
	getInitialState: function() {
		return {
			userIsAuthenticated: false,
			userName: false,
			userId: false
		}
	},
	signIn: function() {
		this.setState({
			userIsAuthenticated: true,
			userName: 'Socrates',
			userId: 1234
		});

		this.context.router.push('/weight');
	},
	signOut: function() {
		this.setState({
			userIsAuthenticated: false,
			userName: false,
			userId: false
		});

		this.context.router.push('/intro');
	},
	render: function() {
		var self = this;
		// Use react helper methods to pass state to arbitrary child component
		var children = React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				signIn: self.signIn,
				signOut: self.signOut,
				userIsAuthenticated: self.state.userIsAuthenticated,
				userName: self.state.userName,
				userId: self.state.userId
			})
		})

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Navbar signIn={this.signIn} signOut={this.signOut} userIsAuthenticated={this.state.userIsAuthenticated} />
					{children}
				</div>
			</MuiThemeProvider>
		)
	}
});

Layout.contextTypes = {
	router: React.PropTypes.object
};

export default Layout