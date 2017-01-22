import { Chart } from 'react-google-charts';
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';

class Weight extends Component {
	render() {
		var chartData = this.props.entries.map((entry) => [new Date(entry.date), Number(entry.weight)]);

		return (
			<Paper className='chart-paper'>
				<div className="my-pretty-chart-container">

					{ chartData.length > 0 ? (
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
				) : (
						<h3>No Weight Data To Display</h3>
					)
				}
			    </div>
			</Paper>
		)
	}
};

export default Weight
