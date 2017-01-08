import React, { Component } from 'react';

import WeightTable from './WeightTable.jsx';
import WeightChart from './WeightChart.jsx';

class Weight extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: [
				{
					date: new Date(2016, 6, 28, 14, 39, 7),
					weight: '150.00'
				},
				{
					date: new Date(2016, 7, 23, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 26, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 29, 14, 39, 7),
					weight: '156.00'
				},
				{
					date: new Date(2016, 8, 3, 14, 39, 7),
					weight: '158.00'
				},
				{
					date: new Date(2016, 8, 10, 14, 39, 7),
					weight: '160.00'
				}
			]
		}

		this.updateEntries = this.updateEntries.bind(this);
	}
	updateEntries(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		})
	}
	render() {
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
};

export default Weight
