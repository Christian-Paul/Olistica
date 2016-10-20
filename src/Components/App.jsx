import React from 'react';
import { Router, Route, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Landing from './Landing.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Landing} />
				</Route>
			</Router>
		)
	}
});

export default App