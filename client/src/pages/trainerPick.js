import React from 'react';
import Trainerbox from'./trainers';
import trainer1 from '../images/trainer1.jpg';
import trainer2 from '../images/trainer2.jpg';
import trainer3 from '../images/trainer3.jpg';
import '../trainer.css'

function Trainer() {
    return (

        <div id='features'>
            <h1>Select your Trainer</h1>
            <div className='a-container'>
                <Trainerbox image={trainer1} name="Emerald" about="An expert in strength training and high impact workouts"/>
                <Trainerbox image={trainer2} name="Bill" about="An expert in long distance and endurance training." />
                <Trainerbox image={trainer3} name="Steve" about="An expert in general health and wellness exercise." />
                
            </div>
            
        </div>
    
    )
}

export default Trainer
