import {blue500, red500, greenA200} from 'material-ui/styles/colors';
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

				<section className='project-details-section'>
						<h1>Project Details</h1>
						<p>This Web App was created as a result of our passion for self-improvement in the form of reflection and growth. It was built using MongoDB, Express, React, Node, Redux, and Material-UI. The full <a className='github-source' href='https://github.com/Christian-Paul/Olistica'>source code</a> is available on GitHub.</p>
				</section>

				<section className='biography-section'>
					<header className='bio-title'>
						<h1>Who we are</h1>
					</header>

					<div className='bios'>
						<section className='bio'>
							<h2>Christian Paul</h2>
							<img src='./public/chris-profile.jpg' />
							<h4>I'm a Web Developer who loves to learn and work with new and progressive technologies. I'm passionate about creating beautiful web apps that provide an intuitive user experience. When I'm not coding I'm usually looking for fun things to learn (right now I'm into ice skating). I'm looking for a position as a Front End or Full Stack Web Developer; see more of what I can do on my portfolio, LinkedIn, and GitHub accounts below!</h4>
							<div>

							</div>
						</section>

						<section className='bio'>
							<h2>Alexander Allen</h2>
							<img src='./public/alex-profile.jpg' />
							<h4>I'm a creator and a learner. I love science and technology. I'm passionate about solving important problems. Some of my interests are fitness, nutrition and snowboarding.</h4>
							<div>
							</div>
						</section>
					</div>

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

				<footer>
					Copyright &copy; 2016
				</footer>
			</div>
		)
	}
});

export default Landing