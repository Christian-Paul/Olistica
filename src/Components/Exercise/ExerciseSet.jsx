import React from 'react';
import TextField from 'material-ui/TextField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';


const styles = {
	liftInput: {
		width: "2rem"
	}
};

const ExerciseSet = React.createClass({
	getInitialState: function() {
		return ({
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
		})
	},
	updateEntries: function(userInput) {
		this.setState({
			entries: this.state.entries.concat(userInput)
		})
	},
	render: function() {
		return (
			<div className='weight'>
				<span>
					<TextField style={styles.liftInput} value={this.props.weight} />

					reps of

					<TextField style={styles.liftInput} value={this.props.reps} /> lbs

					<IconButton>
						<NavigationClose  />
					</IconButton>
				</span>
			</div>
		)
	}

});

export default ExerciseSet
