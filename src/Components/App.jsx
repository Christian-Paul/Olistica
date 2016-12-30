import React from 'react';
import { Router, Route, IndexLink, IndexRoute, browserHistory } from 'react-router';

import About from './About.jsx';
import Intro from './Intro.jsx';
import Layout from './Layout.jsx';
import Landing from './Landing.jsx';
import Weight from './Weight.jsx';
import LiftTracker from './LiftTracker.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Landing} />
					<Route path='/intro' component={Intro} />
					<Route path='/weight' component={Weight} />
					<Route path='/lift-tracker' component={LiftTracker} />
					<Route path='/about' component={About} />
				</Route>
			</Router>
		)
	}
});

export default App