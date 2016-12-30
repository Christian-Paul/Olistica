import React from 'react';
import LiftCard from './LiftCard.jsx';
import RaisedButton from 'material-ui/RaisedButton';

const LiftTracker = React.createClass({
	getInitialState: function() {
		return ({
			workoutTitle: 'Today',
			exercises: [{
				name: 'Squats',
				sets: [
					{
						reps: 6,
						weight: 185
					},
					{
						reps: 5,
						weight: 225
					},
					{
						reps: 5,
						weight: 255
					}
				]
			},
			{
				name: 'Bench',
				sets: [
					{
						reps: 4,
						weight: 225
					},
					{
						reps: 5,
						weight: 265
					},
					{
						reps: 5,
						weight: 315
					}
				]
			}]
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
				<h1>Tracking date's workout</h1>
				{this.state.exercises.map(function (exercise, i) {
					return <LiftCard
										name={exercise.name}
										sets={exercise.sets}
									/>;
				})}
				<RaisedButton label='Add Exercise' primary={true} />
			</div>
		)
	}

});

export default LiftTracker
