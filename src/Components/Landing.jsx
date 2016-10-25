import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

import About from './About.jsx';

const Landing = React.createClass({
	signIn: function() {
		//handle signin
	},
	render: function() {
		return (
			<div>
				<section className='landing'>
					<h1 className='landing-title'>OLISTICA</h1>
					<h3 className='landing-subtitle'>That which is measured improves</h3>
					<RaisedButton 
						label="Sign in"
						style={{
							height: 50,
							width: 120
						}}
						labelStyle={{
							fontWeight: 500
						}}
						secondary={true} 
						onTouchTap={this.signIn} 
					/>
				</section>

				<About />
			</div>
		)
	}
});

export default Landing