import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class AddingEntryInterface extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weight: '',
			date: new Date(),
			errorMessage: ''
		}

		this.handleWeightInput = this.handleWeightInput.bind(this);
		this.handleDateInput = this.handleDateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleWeightInput(e) {
		this.setState({
			weight: e.target.value
		})
	}
	handleDateInput(n, newDate) {
		this.setState({
			date: newDate
		})
	}
	handleSubmit() {
		var weight = this.state.weight;
		var weightNumber = Number(weight);
		var date = this.state.date; 

		// check if input is acceptable, update entries if it is, send error message if it isn't
		if(weight.length > 0 && typeof(weightNumber) === 'number' && isFinite(weightNumber) && weightNumber > 0) {

			var entry = {
				date: date,
				weight: weightNumber.toFixed(2)
			}

			this.props.addEntry(entry);
			this.props.stopAdding();
		} else {
			this.setState({
				errorMessage: 'Must be a positive number'
			})
		}
	}
	render() {
		return (
			<div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
				<TextField hintText="Weight" errorText={this.state.errorMessage} value={this.state.weight} onChange={this.handleWeightInput} />
				<DatePicker autoOk={true} maxDate={new Date()} hintText="Date" onChange={this.handleDateInput} defaultDate={new Date()} />
				<FlatButton onTouchTap={this.handleSubmit} label="Submit" primary={true} />
				<FlatButton onTouchTap={this.props.stopAdding} label="Cancel" primary={true} />
			</div>
		)
	}
}

export default AddingEntryInterface