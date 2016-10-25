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
			<div className='weight-table'>
				<h1>Weight Table</h1>
				{this.props.entries.map(function(item, i) {
					return (
						<div key={i}>{item}</div>
					)
				})}
				{this.state.addingEntry ? <AddingEntryInterface stopAdding={this.stopAdding} updateEntries={this.props.updateEntries} /> : <FlatButton onTouchTap={this.startAdding} label="Add Entry" primary={true} />}
			</div>
		)
	}
})

export default WeightTable