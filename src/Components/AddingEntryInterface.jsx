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
		// check if input is acceptable, send error message if it isn't
		var input = e.target.value;
		var inputNumber = Number(input);

		if(Number.isInteger(inputNumber) && inputNumber > 0 || input.length === 0) {
			this.setState({
				userInput: input,
				errorMessage: ''
			})
		} else {
			this.setState({
				userInput: input,
				errorMessage: 'Must be a positive integer'
			})
		}
	},
	handleSubmit: function() {
		this.props.updateEntries(this.state.userInput);

		this.setState({
			userInput: ''
		});

		this.props.stopAdding();
	},
	render: function() {
		return (
			<div>
				<TextField hintText="Weight" errorText={this.state.errorMessage} value={this.state.userInput} onChange={this.handleChange} />
				<DatePicker hintText="Date" defaultDate={new Date()} />
				<FlatButton onTouchTap={this.handleSubmit} label="Submit" primary={true} />
				<FlatButton onTouchTap={this.props.stopAdding} label="Cancel" primary={true} />
			</div>
		)
	}
})

export default AddingEntryInterface