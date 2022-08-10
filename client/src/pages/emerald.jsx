import React from "react";
import fig1 from "../images/trainer1.jpg"
import {Link} from "react-router-dom"

function Emerald(props) {
    return (
        <div className="a-container">
        <div className='t-box'>
        <div class='t-img'>
            <img src ={fig1} alt=''/>
        </div>

        <div className='pr-btns'>
            <Link to="../login" className='pr-btn'>Plan a Meetup</Link>
        </div>
        <div className='t-text'>
            <h2>{props.title}</h2>
            <h2>Our Recommendation: Emerald</h2>
        </div>
        
    </div>
    </div>
        
        
    )
}

export default Emerald