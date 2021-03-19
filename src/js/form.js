import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';

class Form extends React.Component {
	render() {
		return (
			<div className='form'>
                 <form>
                        <input type="text" name="firstname" placeholder="Your name" required></input>
                        <input type="mail"  name="Email" placeholder="Email Address" required></input>
                        <input type="text"  name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button  type="submit">Send Message</button>
                    </form>
			</div>
		);
	}
}

export default hot(Form);
