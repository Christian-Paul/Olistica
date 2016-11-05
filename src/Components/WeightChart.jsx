import {Chart} from 'react-google-charts';
import Paper from 'material-ui/Paper';
import React from 'react';

const Weight = React.createClass({
	render: function() {
		var chartData = this.props.entries.map((entry) => [entry.date, entry.weight]);
		return (
			<Paper className='chart-paper'>
				<div className={"my-pretty-chart-container"}>
		      <Chart
		        chartType="LineChart"
		        data={[
								['Date', 'Weight']
							].concat(chartData)}
		        options={{}}
		        graph_id="LineChart"
		        width="100%"
		        height="400px"
		        legend_toggle
		       />
		    </div>
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
