import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';

import About from './About.jsx';

class Intro extends Component {
	render() {
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
};

export default Intro