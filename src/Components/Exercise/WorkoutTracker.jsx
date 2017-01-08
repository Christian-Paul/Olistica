import React, { Component } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class WorkoutTracker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			workout: { exercises: [] }		
		}
	}
	componentDidMount() {
		$.ajax({
			url: "/workouts/workout/586706f39f3be421c0b24ec7",
			success: (data) => {
				if (!data.error) {
					this.setState({
					workout: data.workout
				});
				} else {
					console.log("error");
				}
			},
			dataType: "json"
		});
	}
	render() {
		return (
			<div className='weight'>
				<h1>Tracking date's workout</h1>
				{this.state.workout.exercises.map(function (exercise, i) {
					return <ExerciseCard
								key={i}
								name={exercise.name}
								sets={exercise.sets}
							/>;
				})}
				<RaisedButton label='Add Exercise' primary={true} />
			</div>
		)
	}
};

export default WorkoutTracker
