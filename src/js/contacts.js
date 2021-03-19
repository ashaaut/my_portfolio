import React from 'react';
import { hot } from 'react-hot-loader/root';
import Form from './form'
import Media from './media';
import './../assets/styles/styles.css';

class Contact extends React.Component {
	render() {
		return (
			<div className='Contact-div'>
                <div className="contact-header">
                    <h1 className="about-header">Get In Touch</h1>
                </div>
                <div className="contact-container">
                <div className="form-div">
                    <Form/>
                </div>
                <div className="media-details">
                    <Media/>
                </div>
                </div>
                
                
			</div>
		);
	}
}

export default hot(Contact);
