import React from 'react'
import {Link} from 'react-router-dom';


 function Header() {
    return (
        <div id='main'>
            <div className='pr-heading'>
                <h2>Get Out Of Your Comfort Zone</h2>
                <h1><span>Train</span>With us</h1>
                <p className='details'> Stop Wishing Start Doing!!</p>
                <div className='header-btns'>
                    <Link to="Signup" className='header-btn'>JOIN US</Link>
                </div>
            </div>
        </div>
    )
}
export default Header
