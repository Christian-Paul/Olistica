import {red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

import Navbar from './Navbar.jsx';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: red500,
	}
});


class Layout extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userIsAuthenticated: false,
			userName: false,
			userId: false	
		}

		this.signIn = this.signIn.bind(this)
		this.signOut = this.signOut.bind(this)
	}
	signIn() {
		this.setState({
			userIsAuthenticated: true,
			userName: 'Socrates',
			userId: 1234
		});

		this.context.router.push('/weight');
	}
	signOut() {
		this.setState({
			userIsAuthenticated: false,
			userName: false,
			userId: false
		});

		this.context.router.push('/intro');	
	}
	render() {
		// Use react helper methods to pass state to arbitrary child component
		var children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				signIn: this.signIn,
				signOut: this.signOut,
				userIsAuthenticated: this.state.userIsAuthenticated,
				userName: this.state.userName,
				userId: this.state.userId
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
};

Layout.contextTypes = {
	router: React.PropTypes.object
};

export default Layout