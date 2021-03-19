import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
class Media extends React.Component {
	render() {
		return (
			<div className='media-div'>
                <h5 className="about-info">Whether you want to get in touch, talk about 
                    a project collaboration, or just say hi, I'd love to hear from you.
                     Simply fill the from and send me an email.</h5>

                <div>
                    <GitHubIcon style={{ fontSize: 40 }} className="icon"/>
                    <LinkedInIcon style={{ fontSize: 45 }} className="icon"/>
                    
                </div>
                <div>
                    <GetAppIcon style={{ fontSize: 70 }} className="icon"/>
                </div>
			</div>
		);
	}
}

export default hot(Media);
