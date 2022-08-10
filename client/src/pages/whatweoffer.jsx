import React from 'react'
import {Link} from "react-router-dom"

function Featurebox(props) {
    return (
        <div className='a-box'>
            <div class='a-b-img'>
                <img src ={props.image} alt=''/>
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p><Link to="../emerald" className='pr-btn'>Meet the Expert</Link></p>
            </div>
        </div>
    )
}

export default Featurebox
