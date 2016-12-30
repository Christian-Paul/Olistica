import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import WorkoutCard from './WorkoutCard.jsx';

const ExerciseView = React.createClass({
	getInitialState: function() {
		return ({
			workouts: [
				{
					workoutTitle: '11/17/2016',
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
				},
				{
					workoutTitle: '12/20/2016',
					exercises: [{
						name: 'Curls',
						sets: [
							{
								reps: 12,
								weight: 50
							},
							{
								reps: 8,
								weight: 55
							},
							{
								reps: 5,
								weight: 60
							}
						]
					},
					{
						name: 'Tricep Pulldowns',
						sets: [
							{
								reps: 10,
								weight: 55
							},
							{
								reps: 10,
								weight: 65
							},
							{
								reps: 12,
								weight: 50
							}
						]
					}]
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
				<div>
					<span>
						<span>Track Workout For&nbsp;</span>

						<DatePicker style={{display: "inline-block"}} hintText="Date" defaultDate={new Date()} />

						<RaisedButton label='Save' primary={true} />
					</span>
					<h2>Workouts</h2>
					<WorkoutCard title={this.state.workouts[0].workoutTitle} exercises={this.state.workouts[0].exercises} />
					<WorkoutCard title={this.state.workouts[1].workoutTitle} exercises={this.state.workouts[1].exercises} />
				</div>
			</div>
		)
	}

});

export default ExerciseView
