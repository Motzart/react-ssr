import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Solutions extends React.Component {
	render() {
		return (
			<div>
				<Helmet title="Solutions page" />
				<div>
					<h1>Solutions</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Solutions;
