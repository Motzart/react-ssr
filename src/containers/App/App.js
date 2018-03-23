import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header.js';
import Home from '../../pages/Home/Home.js';
import Solutions from '../../pages/Solutions/Solutions.js';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class App extends Component {
	render() {
		return (
			<div>
				<Helmet
					htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
					titleTemplate="%s | React App"
					titleAttributes={{ itemprop: 'name', lang: 'en' }}
					meta={[
						{ name: 'description', content: 'Server side rendering example' },
						{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
					]}
				/>
				<div className="App">
					<Header />
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/solutions" component={Solutions} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
