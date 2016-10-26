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
			<div className='weight-table-container'>
				<h1>Weight Table</h1>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Weight</th>
						</tr>
					</thead>
					<tbody>
					{this.props.entries.map(function(item, i) {
						return (
							<tr key={i}>
								<td>{i}</td>
								<td>{item}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
				{this.state.addingEntry ? <AddingEntryInterface stopAdding={this.stopAdding} updateEntries={this.props.updateEntries} /> : <FlatButton style={{marginTop: '2rem', marginBottom: '2rem'}} onTouchTap={this.startAdding} label="Add Entry" primary={true} />}
			</div>
		)
	}
})

export default WeightTable