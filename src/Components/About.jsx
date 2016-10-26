import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { red500 } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const LinkedInSVG = (props) => (
	<SvgIcon {...props} viewBox='0 0 27 32' hoverColor={red500}>
		<path d="M4.232 25.25h4.125v-12.393h-4.125v12.393zM8.625 9.036q-0.018-0.929-0.643-1.536t-1.661-0.607-1.688 0.607-0.652 1.536q0 0.911 0.634 1.527t1.652 0.616h0.018q1.054 0 1.696-0.616t0.643-1.527zM19.071 25.25h4.125v-7.107q0-2.75-1.304-4.161t-3.446-1.411q-2.429 0-3.732 2.089h0.036v-1.804h-4.125q0.054 1.179 0 12.393h4.125v-6.929q0-0.679 0.125-1 0.268-0.625 0.804-1.063t1.321-0.438q2.071 0 2.071 2.804v6.625zM27.429 7.429v17.143q0 2.125-1.509 3.634t-3.634 1.509h-17.143q-2.125 0-3.634-1.509t-1.509-3.634v-17.143q0-2.125 1.509-3.634t3.634-1.509h17.143q2.125 0 3.634 1.509t1.509 3.634z"></path>
	</SvgIcon>
);

const GitHubSVG = (props) => (
	<SvgIcon {...props} viewBox='0 0 32 32' hoverColor={red500}>
		<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
	</SvgIcon>
);

const LinkSVG = (props) => (
	<SvgIcon {...props} viewBox='0 0 32 32' hoverColor={red500}>
		<path d="M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"></path>
		<path d="M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"></path>
	</SvgIcon>
);

const bioStyle = {
	width: 96,
	height: 96
};

const bioIconStyle = {
	width: 48,
	height: 48
}

const About = React.createClass({
	render: function() {
		return (
			<section className='about'>
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
							<h2 className='person-name'>Christian Paul</h2>
							<img src='./public/chris-profile.jpg' />
							<p>I'm a Web Developer who loves to learn and work with new and progressive technologies. I'm passionate about creating beautiful web apps that provide an intuitive user experience. When I'm not coding I'm usually looking for fun things to learn (right now I'm into ice skating). I'm looking for a position as a Front End or Full Stack Web Developer; see more of what I can do on my portfolio, LinkedIn, and GitHub accounts below!</p>
							<div>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='https://github.com/Christian-Paul'>
									<GitHubSVG />
								</IconButton>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='http://christianpaul.xyz/'>
									<LinkSVG />
								</IconButton>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='https://www.linkedin.com/in/christian-paul'>
									<LinkedInSVG />
								</IconButton>
							</div>
						</section>

						<section className='bio'>
							<h2 className='person-name'>Alexander Allen</h2>
							<img src='./public/alex-profile.jpg' />
							<p>I'm a creator and a learner. I love science and technology. I'm passionate about solving important problems. Some of my interests are fitness, nutrition and snowboarding.</p>
							<div>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='https://github.com/AlexWD'>
									<GitHubSVG />
								</IconButton>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='http://alexwd.me/'>
									<LinkSVG />
								</IconButton>
								<IconButton style={bioStyle} iconStyle={bioIconStyle} target='_blank' href='https://www.linkedin.com/in/alexander-allen-wd'>
									<LinkedInSVG />
								</IconButton>
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
						onTouchTap={this.props.signIn} 
					/>

				</section>

				<footer>
					<span>
						Copyright &copy; 2016
					</span>
					<span>
						<a href='https://github.com/Christian-Paul/Olistica'>Github Repo</a>
					</span>
				</footer>
			</section>
		)
	}
})

export default About