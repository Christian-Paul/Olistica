import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Navbar = React.createClass({
	signIn: function() {
		// send request to server
	},
	render: function() {
		return (
			<nav>
				<ul>
					<li>
						<div>=</div>
					</li>
					<li>
						<h1>Olistica</h1>
					</li>
				</ul>

				<ul>
					<li>
						<RaisedButton label="Sign in" secondary={true} onTouchTap={this.signIn} />
					</li>
				</ul>
			</nav>
		)
	}

});

export default Navbar