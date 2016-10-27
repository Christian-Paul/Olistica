import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

import About from './About.jsx';

const Intro = React.createClass({
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
						onTouchTap={this.props.signIn} 
					/>
				</section>

				<About signIn={this.props.signIn} />
			</div>
		)
	}
});

export default Intro