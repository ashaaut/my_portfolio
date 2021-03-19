import React from 'react';
import { hot } from 'react-hot-loader/root';
import './../assets/styles/styles.css';
import {skillsBar} from './profile';
import Skill from './skill';
const Skills = ()=> {
    return (
        <div className="skills-div">
            {skillsBar.map(s=><Skill label={s.name} per={s.value}/>)}
        </div>
    )
}

export default hot(Skills);
