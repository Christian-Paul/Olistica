import React from 'react';

const WeightTable = React.createClass({
	getInitialState: function() {
		return ({
			userInput: ''
		})
	},
	handleChange: function(e) {
		this.setState({
			userInput: e.target.value
		})
	},
	handleClick: function() {
		this.setState({
			userInput: ''
		})

		this.props.updateEntries(this.state.userInput)
	},
	render: function() {
		return (
			<div className='weight-table'>
				{this.props.entries.map(function(item, i) {
					return (
						<div key={i}>{item}</div>
					)
				})}
				<input type='text' value={this.state.userInput} onChange={this.handleChange} />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
})

export default WeightTable