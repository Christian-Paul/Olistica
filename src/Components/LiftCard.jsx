import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import LiftSet from './LiftSet.jsx';

const LiftCard = React.createClass({
	getInitialState: function() {
		return ({
			entries: [
				{
					date: new Date(2016, 6, 28, 14, 39, 7),
					weight: '150.00'
				},
				{
					date: new Date(2016, 7, 23, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 26, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 29, 14, 39, 7),
					weight: '156.00'
				},
				{
					date: new Date(2016, 8, 3, 14, 39, 7),
					weight: '158.00'
				},
				{
					date: new Date(2016, 8, 10, 14, 39, 7),
					weight: '160.00'
				}
			]
		})
	},
	updateEntries: function(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		})
	},
	render: function() {
		return (
			<div className='weight'>
				<Paper>
					<h3>Squats</h3>
					<LiftSet />
					<RaisedButton label='Save' primary={true} />
				</Paper>
			</div>
		)
	}

});

export default LiftCard