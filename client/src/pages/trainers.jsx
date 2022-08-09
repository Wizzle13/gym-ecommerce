import React from 'react'

function Trainerbox(props) {
    return (
        <div className='trainer-box'>
            <div class='trainer-img'>
                <img src ={props.image} alt=''/>
            </div>
            <div className='trainer-text'>
                <h2>{props.name}</h2>
                <p>{props.about}</p>
                <button className='trainer-btn'>Select</button>
            </div>
            
        </div>
    )
}

export default Trainerbox