import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';
import {projects} from './profile';
import Project from './project'
console.log(projects)
const Projects = ()=> {
    return (
        <div className="projects-div">
            <h1 className="about-header">Past Projects</h1>
            <div  className="project-container">
            {projects.map(p=><Project name={p.name} skills={p.skills}/>)}
        
            </div>
            </div>
    )
}

export default hot(Projects);
