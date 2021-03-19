import React,{useState,useEffect}from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects'
import Contact from './contacts';
import './../assets/styles/styles.css';

function App() {
	const [dark,setMode]=useState("false");
		return (
			<div className={dark?'App dark-mode':'App light-mode'}>
				<div className="nav">
					<label className="switch">
  					<input type="checkbox" onChange={()=>setMode(!dark)}/>
  					<span className="slider round"></span>
					</label>
				 </div>
				 {/* <Home/>
				 <About/>
				<Skills/> 
				<Projects/> */}
				<Contact/>
			</div>
		);
}

export default hot(App);
