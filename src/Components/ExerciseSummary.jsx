import React from 'react';

const ExerciseSummary = React.createClass({
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
			<div className='exercise-summary'>
        <h3>{this.props.name}</h3>
        <div className='set-list'>
          {this.props.sets.map(function(set) {
            return <span>{set.weight} x {set.reps}</span>
          })}
        </div>
			</div>
		)
	}

});

export default ExerciseSummary
