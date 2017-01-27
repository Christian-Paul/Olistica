import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import AddingEntryInterface from './AddingEntryInterface.jsx';

class WeightTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addingEntry: false
		}

		this.startAdding = this.startAdding.bind(this);
		this.stopAdding = this.stopAdding.bind(this);
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
	render() {
		var isAddingEntry = this.state.addingEntry;

		return (
			<Paper className='table-paper'>
				<h3 className='table-title'>Weight Table</h3>
					{isAddingEntry ? (
						<AddingEntryInterface stopAdding={this.stopAdding} addEntry={this.props.addEntry} />
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
								<IconButton>
									<ActionDelete onClick={() => this.props.deleteEntry(entry['_id'])} />
								</IconButton>
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
