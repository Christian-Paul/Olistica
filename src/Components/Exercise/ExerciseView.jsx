import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import WorkoutCard from './WorkoutCard.jsx';

class ExerciseView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			workouts: []	
		}
	}
	componentDidMount() {
		$.ajax({
			url: "/workouts/summary",
			success: (data) => {
				if (!data.error) {
					this.setState({
						workouts: data.workouts
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