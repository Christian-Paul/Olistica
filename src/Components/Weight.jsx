import React from 'react';

import WeightTable from './WeightTable.jsx';
import WeightChart from './WeightChart.jsx';

const Weight = React.createClass({
	getInitialState: function() {
		return ({
			entries: [
				{
					date: new Date(2016, 6, 28, 14, 39, 7),
					weight: 150
				},
				{
					date: new Date(2016, 7, 23, 14, 39, 7),
					weight: 155
				}
			]
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
				<h1 className='module-title'>Weight Tracker</h1>
				<div className='paper-container'>
					<WeightChart entries={this.state.entries} />
					<WeightTable updateEntries={this.updateEntries} entries={this.state.entries} />
				</div>
			</div>
		)
	}

});

export default Weight