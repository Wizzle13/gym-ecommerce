import React from 'react';
import aboutimage from '../images/around.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=""/>
            </div>
            <div className='about-text'>
                <h1>We Have Personal Trainers around the World</h1>
            </div>
            
            
        </div>
    )
}

export default About
