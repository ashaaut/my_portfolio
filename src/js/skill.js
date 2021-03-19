import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';

const Skill = ({ label, per }) => {
    return (
        <div className="skill-div">
            <h2>{label}</h2>
            <div class="container"> 
                <div class="skill"  style={{width:per*5}} >hii</div> 
    
            </div>
        </div>
    )
}

export default hot(Skill);
