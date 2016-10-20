import React from 'react';

const Navbar = React.createClass({

	render: function() {
		return (
			<nav>
				<ul>
					<li>
						<div>=</div>
					</li>
					<li>
						<h1>Olistica</h1>
					</li>
				</ul>

				<ul>
					<li>
						<button>Sign in</button>
					</li>
				</ul>
			</nav>
		)
	}

});

export default Navbar