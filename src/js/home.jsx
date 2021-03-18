import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';

class Home extends React.Component {
	render() {
		return (
			<div className='home'>
                <div className="name">
                    <h1>I'm Asha Autade</h1>
                    <p>and this is my portfolio.......</p>
                </div>
                <div className="checkOut-div">
                    <button className="checkout">Checkout Portfolio</button>
                
                </div>
                
			</div>
		);
	}
}

export default hot(Home);
