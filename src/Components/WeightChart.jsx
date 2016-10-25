import React from 'react';

const Weight = React.createClass({
	render: function() {
		return (
			<div className='weight-chart'>
				This is the weight chart
				{this.props.entries.map(function(item, i) {
					return (
						<div key={i}>{item}</div>
					)
				})}
			</div>
		)
	}
});

export default Weight