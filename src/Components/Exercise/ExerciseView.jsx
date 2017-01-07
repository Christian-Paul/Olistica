import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import WorkoutCard from './WorkoutCard.jsx';

const ExerciseView = React.createClass({
	getInitialState: function() {
		return ({
			workouts: []
		})
	},
	componentDidMount: function() {
		var self = this;
		$.ajax({
      url: "/workouts/summary",
      success: function (data) {
        if (!data.error) {
					self.setState({
						workouts: data.workouts
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
				<div>
					<span>
						<span>Track Workout For&nbsp;</span>

						<DatePicker style={{display: "inline-block"}} hintText="Date" defaultDate={new Date()} />

						<RaisedButton label='Save' primary={true} />
					</span>
					<h2>Workouts</h2>
					{this.state.workouts.map((workout, i) => {
						return <WorkoutCard title={workout.title} exercises={workout.exercises} />;
					})}
				</div>
			</div>
		)
	}

});

export default ExerciseView
