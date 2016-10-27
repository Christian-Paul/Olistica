import Paper from 'material-ui/Paper';
import React from 'react';

const Weight = React.createClass({
	render: function() {
		return (
			<Paper className='chart-paper'>
				<img src='public/linechart.png' style={{height: '90%'}} />
				<div style={{display: 'none'}}>
					{this.props.entries.map(function(entry, i) {
						// here's the data you'll need to make the chart

						var date = `${entry.date.getMonth()+1}/${entry.date.getDate()}/${entry.date.getFullYear()}`
						return (
							<div key={i}>Date: {date} Weight: {entry.weight}</div>
						)
					})}
				</div>
			</Paper>
		)
	}
});

export default Weight