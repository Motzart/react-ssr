import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Helmet title="Welcome to our Homepage" />
				<div>
					<h1>Home</h1>
					<nav>
						<ul>
							<li>
								<Link to="/solutions">Solutions</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Home;
