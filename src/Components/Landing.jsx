import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Landing = React.createClass({
	componentDidMount: function() {
		// upon initially loading index route, check if user is signed in
		// if they are redirect to a module
		// otherwise, redirect to into page
		if(this.props.userIsAuthenticated) {
			this.context.router.push('/weight');
		} else {
			this.context.router.push('/intro');
		}
	},
	render: function() {
		return (
			<div>Please wait...</div>
		)
	}
});

Landing.contextTypes = {
	router: React.PropTypes.object
};

export default Landing