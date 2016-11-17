import {Chart} from 'react-google-charts';
import Paper from 'material-ui/Paper';
import React from 'react';

const Weight = React.createClass({
	render: function() {
		var chartData = this.props.entries.map((entry) => [entry.date, Number(entry.weight)]);

		return (
			<Paper className='chart-paper'>
				<div className="my-pretty-chart-container">
					<Chart
						chartType="LineChart"
						data={[
										['Date', 'Weight']
									].concat(chartData)}
						options={{
							title: 'Weight Chart',
							titleTextStyle: {
								fontName: 'Roboto',
								fontSize: 30,
								bold: false
							},
							fontName: 'Roboto',
							legend: {
								position: 'none'
							},
							tooltip: {
								textStyle: {
									bold: false
								}
							},
							chartArea: {
								left: '18%'
							}
						}}
						graph_id="LineChart"
						width="100%"
						height="400px"
						legend_toggle
					/>
			    </div>
			</Paper>
		)
	}
});

export default Weight
