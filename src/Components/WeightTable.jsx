import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

import AddingEntryInterface from './AddingEntryInterface.jsx';

const WeightTable = React.createClass({
	getInitialState: function() {
		return ({
			addingEntry: false
		})
	},
	startAdding: function() {
		this.setState({
			addingEntry: true
		})
	},
	stopAdding: function() {
		this.setState({
			addingEntry: false
		})
	},
	render: function() {
		return (
			<Paper className='table-paper'>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Weight</th>
						</tr>
					</thead>
					<tbody>
					{this.props.entries.map(function(entry, i) {
						return (
							<tr key={i}>
								<td>{`${entry.date.getMonth()+1}/${entry.date.getDate()}/${entry.date.getFullYear()}`}</td>
								<td>{entry.weight}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
				{this.state.addingEntry ? <AddingEntryInterface stopAdding={this.stopAdding} updateEntries={this.props.updateEntries} /> : <FlatButton style={{marginTop: '2rem', marginBottom: '2rem'}} onTouchTap={this.startAdding} label="Add Entry" primary={true} />}
			</Paper>
		)
	}
})

export default WeightTable