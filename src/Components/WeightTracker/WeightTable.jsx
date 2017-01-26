import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';

import AddingEntryInterface from './AddingEntryInterface.jsx';

class WeightTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addingEntry: false
		}

		this.startAdding = this.startAdding.bind(this);
		this.stopAdding = this.stopAdding.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
	}
	startAdding() {
		this.setState({
			addingEntry: true
		})
	}
	stopAdding() {
		this.setState({
			addingEntry: false
		})
	}
	deleteEntry(id) {
		console.log('deleting entry: ', id);
	}
	render() {
		var isAddingEntry = this.state.addingEntry;

		return (
			<Paper className='table-paper'>
				<h3 className='table-title'>Weight Table</h3>
					{isAddingEntry ? (
						<AddingEntryInterface stopAdding={this.stopAdding} updateEntries={this.props.updateEntries} />
					) : (
						<FlatButton style={{marginTop: '2rem', marginBottom: '2rem'}} onTouchTap={this.startAdding} label="Add Entry" primary={true} />
					)}
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Weight</th>
						</tr>
					</thead>
					<tbody>
					{Array.prototype.slice.call(this.props.entries).reverse().map((entry, i) => {
						return (
							<tr key={i}>
								<td>{`${entry.date.getMonth()+1}/${entry.date.getDate()}/${entry.date.getFullYear()}`}</td>
								<td>{entry.weight}</td>
								<div class='delete-entry' onClick={() => this.deleteEntry(entry['_id'])}>x</div>
							</tr>
						)
					})}
					</tbody>
				</table>
			</Paper>
		)
	}
}

export default WeightTable
