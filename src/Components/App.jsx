import React from 'react';
import { Router, Route, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Landing from './Landing.jsx';
import Weight from './Weight.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Landing} />
					<Route path='/weight' component={Weight} />
				</Route>
			</Router>
		)
	}
});

export default App