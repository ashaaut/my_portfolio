import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';
// import img from './../assets/images/ashaPhoto.png';

class About extends React.Component {
	render() {
		return (
			<div className='about-div'>
                <div className="img-div">
					hiii
                    {/* <img src={img} alt="asha"width="100" height="50"></img> */}
                </div>
                <div className="info-div">
                    <h1 className="about-header">About me</h1>
					<p className="about-info"> This Asha Autade from Solapur Maharashtra,India.I
 					am a Student who trying to learn various high demand
 					technologies.Currently I am pursuing B.Tech in Information technology
 					from Government college of engineering,karad.
					I am passionate about using Javascript and Animation Libraries to create 
					awesome user experiences.  I created custom websites with ReactJs, JavaScript, HTML5, and CSS3.
					 </p>
                </div>
                
			</div>
		);
	}
}

export default hot(About);





// import { Button } from '@material-ui/core';
// import React from 'react';
// import { hot } from 'react-hot-loader/root';
// import './../assets/styles/styles.css';

// class About extends React.Component {
// 	render() {
// 		return (
// 			<div className='about-container'>
// 				<div className='intro-div'>
// 					<div className='profile'>
// 						<img src='https://www.jquery-az.com/html/images/banana.jpg' />
// 					</div>
// 					<div>
// 						<h1>Asha Autade</h1>
// 					</div>
// 					<div>
// 						<h4>Student of B.Tech(Information technology)</h4>
// 					</div>
// 					<div className='name-div'>
// 						<button>Download Resume</button>
// 					</div>
// 				</div>
// 				<div className='info-div'>
// 					<h1>hey there,</h1> This Asha Autade from Solapur Maharashtra,India.I
// 					am a Student who trying to learn various high demand
// 					technologies.Currently I am pursuing B.Tech in Information technology
// 					from Government college of engineering,karad.
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default hot(About);
