import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import WorkoutCard from './WorkoutCard.jsx';
import axios from 'axios';

class ExerciseView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			workouts: []	
		}
	}
	componentDidMount() {
		axios.get('/workouts/summary')
			.then((data) => {
				this.setState({
					workouts: data.data.workouts
				});
			})
			.catch(function(error) {
				console.log(error)
			});
	}
	render() {
		return (
			<div className='weight'>
				<div>
					<span>
						<span>Track Workout For&nbsp;</span>

						<DatePicker style={{display: "inline-block"}} hintText="Date" defaultDate={new Date()} />

						<RaisedButton label='Save' primary={true} />
					</span>
					<h2>Workouts</h2>
					{this.state.workouts.map((workout, i) => {
						return <WorkoutCard key={i} title={workout.title} exercises={workout.exercises} />;
					})}
				</div>
			</div>
		)
	}
};

export default ExerciseView