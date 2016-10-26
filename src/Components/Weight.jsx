import Paper from 'material-ui/Paper';
import React from 'react';

import WeightTable from './WeightTable.jsx';
import WeightChart from './WeightChart.jsx';

const Weight = React.createClass({
	getInitialState: function() {
		return ({
			entries: [20, 23]
		})
	},
	updateEntries: function(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		})
	},
	render: function() {
		return (
			<div className='weight'>
				<Paper>
					<WeightChart entries={this.state.entries} />
				</Paper>

				<Paper className='table-paper'>
					<WeightTable updateEntries={this.updateEntries} entries={this.state.entries} />
				</Paper>
			</div>
		)
	}

});

export default Weight