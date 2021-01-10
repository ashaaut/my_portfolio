import React from 'react';
import { hot } from 'react-hot-loader/root';
import About from './about';
import './../assets/styles/styles.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<About />
			</div>
		);
	}
}

export default hot(App);
