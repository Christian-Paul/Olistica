import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Landing = React.createClass({
	signIn: function() {
		//handle signin
	},
	render: function() {
		return (
			<div>
				<section className='landing'>
					<h1 className='landing-title'>OLISTICA</h1>
					<h3 className='landing-subtitle'>A platform for holistic living</h3>
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

				<section>
					<h1>What is holistic living?</h1>
					<img />
					<img />
					<img />
					<p>Description and benefits</p>
				</section>

				<section>
					<h1>Project Details</h1>
					Make these images of tech logos
					<img />
					<img />
					<img />
					<p>Details and source code</p>
				</section>

				<section>
					<h1>Who we are</h1>

					<section>
						<h2>Person Name</h2>
						<h4>Bio with holistic flavor</h4>
						<ul>
							<li><a href='#'></a></li>
							<li><a href='#'></a></li>
							<li><a href='#'></a></li>
						</ul>
					</section>

					<section>
						<h2>Person Name</h2>
						<h4>Bio with holistic flavor</h4>
						<ul>
							<li><a href='#'></a></li>
							<li><a href='#'></a></li>
							<li><a href='#'></a></li>
						</ul>
					</section>

					<button>Sign in</button>

				</section>
			</div>
		)
	}
});

export default Landing