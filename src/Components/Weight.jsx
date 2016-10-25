import React from 'react';

const Weight = React.createClass({
	getInitialState: function() {
		return ({
			entries: [20, 23],
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
			entries: this.state.entries.concat(this.state.userInput),
			userInput: ''
		})
	},
	render: function() {
		return (
			<div className='weight'>
				<div className='weight-table'>
					{this.state.entries.map(function(item, i) {
						return (
							<div key={i}>{item}</div>
						)
					})}
				</div>
				<input type='text' value={this.state.userInput} onChange={this.handleChange} />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}

});

export default Weight