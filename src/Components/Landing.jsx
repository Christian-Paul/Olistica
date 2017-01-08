import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';

class Landing extends Component {
	componentDidMount() {
		// upon initially loading index route, check if user is signed in
		// if they are redirect to a module
		// otherwise, redirect to into page
		if(this.props.userIsAuthenticated) {
			this.context.router.push('/weight');
		} else {
			this.context.router.push('/intro');
		}
	}
	render() {
		return (
			<div>Please wait...</div>
		)
	}
};

Landing.contextTypes = {
	router: React.PropTypes.object
};

export default Landing