import React from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import RaisedButton from 'material-ui/RaisedButton';

const WorkoutTracker = React.createClass({
	getInitialState: function() {
		return ({
			workout: { exercises: [] }
		})
	},
	componentDidMount: function() {
		var self = this;
		$.ajax({
      url: "/workouts/workout/586706f39f3be421c0b24ec7",
      success: function (data) {
        if (!data.error) {
					self.setState({
						workout: data.workout
					});
        } else {
          console.log("error");
        }
      },
      dataType: "json"
    });
	},
	render: function() {
		return (
			<div className='weight'>
				<h1>Tracking date's workout</h1>
				{this.state.workout.exercises.map(function (exercise, i) {
					return <ExerciseCard
										name={exercise.name}
										sets={exercise.sets}
									/>;
				})}
				<RaisedButton label='Add Exercise' primary={true} />
			</div>
		)
	}

});

export default WorkoutTracker
