import React, { Component } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class WorkoutTracker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			workout: { exercises: [] }
		}
	}
	componentDidMount() {
		axios.get('/workouts/workout/586706f39f3be421c0b24ec7')
			.then((data) => {
				this.setState({
					workout: data.data.workout
				});
			})
			.catch(function(error) {
				console.log(error)
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
