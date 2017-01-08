import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ExerciseSet from './ExerciseSet.jsx';

class ExerciseCard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: [
				{
					date: new Date(2016, 6, 28, 14, 39, 7),
					weight: '150.00'
				},
				{
					date: new Date(2016, 7, 23, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 26, 14, 39, 7),
					weight: '155.00'
				},
				{
					date: new Date(2016, 7, 29, 14, 39, 7),
					weight: '156.00'
				},
				{
					date: new Date(2016, 8, 3, 14, 39, 7),
					weight: '158.00'
				},
				{
					date: new Date(2016, 8, 10, 14, 39, 7),
					weight: '160.00'
				}
			]
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
			<div className='weight'>
				<Paper>
					<h3>{ this.props.name }</h3>
					{this.props.sets.map(function (set, i) {
						return <ExerciseSet key={i} id={String(i)} reps={set.reps} weight={set.weight} />;
					})}
					<RaisedButton label='Save' primary={true} />
				</Paper>
			</div>
		)
	}
};

export default ExerciseCard
