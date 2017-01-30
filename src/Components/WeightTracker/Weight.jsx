import React, { Component } from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';

import WeightTable from './WeightTable.jsx';
import WeightChart from './WeightChart.jsx';
import AddFirstEntry from './AddFirstEntry.jsx';

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

		this.addEntry = this.addEntry.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
		this.updateEntries = this.updateEntries.bind(this);
	}
	componentDidMount() {
		this.updateEntries();
	}
	addEntry(userInput) {
		axios.post('/weight/add', {
			date: userInput.date,
			weight: userInput.weight
		}).then((response) => {
				var data = response.data;
				if (data.error) {
					console.log(data.error);
				} else {
					this.updateEntries()
					console.log(data);
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	updateEntries() {
		console.log('updating entries!')

		axios.get('/weight/list').then((response) => {
				var data = response.data;
				if (data.error) {
					console.log(data.error);
				} else {

					for (var i = 0;i < data.list.length;++i) {
						data.list[i].date = new Date(data.list[i].date);
					}

					data.list.sort((a, b) => {
						return a.date - b.date;
					})

					this.setState({
						entries: data.list
					});
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	deleteEntry(weightId) {
		console.log('we are gonna delete: ', weightId);

		axios.post('/weight/delete', {
			weightId: weightId
		}).then((response) => {
				var data = response.data;
				if (data.error) {
					console.log(data.error);
				} else {
					console.log(data);
					this.updateEntries();
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
					{this.state.entries.length > 0 ? (
						<div className='paper-container'>
							<WeightChart entries={this.state.entries} />
							<WeightTable deleteEntry={this.deleteEntry} addEntry={this.addEntry} entries={this.state.entries} />
						</div>
					) : (
						<div className='paper-container'>
							<Paper className='first-entry-paper'>
								<AddFirstEntry addEntry={this.addEntry} />
							</Paper>
						</div>
					)}
			</div>
		)
	}
};

export default Weight
