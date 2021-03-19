import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';

const Project = ({name,skills}) => {
    return (
        <div className="project-card">
            <div className="image-project">
            hii
            </div>
            <div className="project-info">
            <a><h2>{name}</h2></a>
            <h5>{skills}</h5>

            </div>
                        
        </div>
    )
}

export default hot(Project);
