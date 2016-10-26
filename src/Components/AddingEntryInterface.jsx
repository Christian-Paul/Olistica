import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const AddingEntryInterface = React.createClass({
	getInitialState: function() {
		return ({
			userInput: '',
			errorMessage: ''
		})
	},
	handleChange: function(e) {
		this.setState({
			userInput: e.target.value
		})
	},
	handleSubmit: function() {
		var input = this.state.userInput;
		var inputNumber = Number(input);

		// check if input is acceptable, update entries if it is, send error message if it isn't
		if(Number.isInteger(inputNumber) && inputNumber > 0 && input.length > 0) {
			this.props.updateEntries(this.state.userInput);
			this.props.stopAdding();
		} else {
			this.setState({
				errorMessage: 'Must be a positive integer'
			})
		}
	},
	render: function() {
		return (
			<div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
				<TextField hintText="Weight" errorText={this.state.errorMessage} value={this.state.userInput} onChange={this.handleChange} />
				<DatePicker hintText="Date" defaultDate={new Date()} />
				<FlatButton onTouchTap={this.handleSubmit} label="Submit" primary={true} />
				<FlatButton onTouchTap={this.props.stopAdding} label="Cancel" primary={true} />
			</div>
		)
	}
})

export default AddingEntryInterface