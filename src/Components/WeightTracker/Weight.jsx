import React, { Component } from 'react';
import axios from 'axios';

import WeightTable from './WeightTable.jsx';
import WeightChart from './WeightChart.jsx';

class Weight extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entries: [
				{
					date: new Date("Sun Jun 05 2016 00:00:00 GMT-0400 (Eastern Daylight Time)"),
					weight: '150.00'
				}
			]
		}

		this.updateEntries = this.updateEntries.bind(this);
	}
	componentDidMount() {
		axios.get('/weight/list').then((response) => {
				var data = response.data;
				if (data.error) {
					console.log(data.error);
				} else {
					for (var i = 0;i < data.list.length;++i) {
						data.list[i].date = new Date(data.list[i].date);
					}

					this.setState({
						entries: data.list
					});
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	updateEntries(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		});

		axios.post('/weight/add', {
			date: userInput.date,
			weight: userInput.weight
		}).then((response) => {
				var data = response.data;
				if (data.error) {
					console.log(data.error);
				} else {
					console.log(data);
				}
			})
			.catch(function(error) {
				console.log(error)
			});
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
