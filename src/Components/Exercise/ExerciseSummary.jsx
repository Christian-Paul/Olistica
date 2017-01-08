import React, { Component } from 'react';

class ExerciseSummary extends Component {
	constructor(props) {
		super(props)

		this.state = {
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
		}

		this.updateEntries = this.updateEntries.bind(this);
	}
	updateEntries(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		})
	}
	render() {
		return (
			<div className='exercise-summary'>
				<h3>{this.props.name}</h3>
				<div className='set-list'>
				{this.props.sets.map(function(set, i) {
					return <span key={i}>{set.weight} x {set.reps}</span>
				})}
				</div>
			</div>
		)
	}
};

export default ExerciseSummary