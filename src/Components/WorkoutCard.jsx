import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import ExerciseSummary from './ExerciseSummary.jsx'

const WorkoutCard = React.createClass({
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
			<div>
        <Paper className='workout-card'>
          <h2>{this.props.title}</h2>
          {this.props.exercises.map(function(exercise) {
            return <ExerciseSummary
                      name={exercise.name}
                      sets={exercise.sets}
                    />
          })}
					<FlatButton label='Edit' secondary={true} />
				</Paper>
			</div>
		)
	}

});

export default WorkoutCard
