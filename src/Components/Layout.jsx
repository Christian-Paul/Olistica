import {red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import axios from 'axios';

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
	componentDidMount() {
		axios.get('/session-data')
			.then((response) => {
				var data = response.data;
				this.setState({
					userIsAuthenticated: data.logged,
					userName: 'Socrates',
					userId: 1234
				});

				if (data.logged) {
					this.context.router.push('/weight');
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	signIn(googleUser) {
		console.log(googleUser);

		var id_token = googleUser.getAuthResponse().id_token;

		axios.get('/auth/google-signin/' + id_token)
			.then((response) => {
				var data = response.data;
				if (!data.error) {
					this.setState({
						userIsAuthenticated: true,
						userName: 'Socrates',
						userId: 1234
					});

					this.context.router.push('/weight');
				} else {
					console.log(data.error);
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	signOut() {
		/*this.setState({
			userIsAuthenticated: false,
			userName: false,
			userId: false
		});

		this.context.router.push('/intro');*/
		window.location = '/logout';
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
