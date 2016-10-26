import React from 'react';

const Weight = React.createClass({
	render: function() {
		return (
			<div className='weight-chart'>
				<h1>Weight Chart</h1>
				{this.props.entries.map(function(item, i) {
					return (
						<div key={i}>{item.weight}</div>
					)
				})}
			</div>
		)
	}
});

export default Weight