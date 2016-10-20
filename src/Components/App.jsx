import React from 'react';
import { Router, Route, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

import SomeComponent from './SomeComponent.jsx';
import SomeOtherComponent from './SomeOtherComponent.jsx';

const App = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={SomeComponent}>
					<IndexRoute component={SomeOtherComponent} />
				</Route>
			</Router>
		)
	}
});

export default App