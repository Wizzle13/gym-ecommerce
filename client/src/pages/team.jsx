import React from 'react'
import {Link} from 'react-router-dom';

function Offer() {
    return (
        <div id='presentaion'>
            <div className='pr-heading'>
                <h1> This <span>is</span> our team</h1>
                <p className='details'>We will be happy to assist you</p>
                <div className='pr-btns'>
                    <Link to="Signup" className='pr-btn'>Come Join Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Offer