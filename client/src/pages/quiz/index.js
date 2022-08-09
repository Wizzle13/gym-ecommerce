import React from 'react';

import hideStart from './script.js';


function Quiz() {

    
    return (

    <div className="min-vh-100 d-flex align-items-center bg-dark" id='contact'>

        <div className="w-100 row justify-content-center">

            <div className="col-10 col-md-6 col-lg-5">

                <h1 className="display-3 text-center text-white">Workout Personality Quiz</h1>

                <p id='subLine' className='text-center text-white'> Answer the Questions and Match with your Personal Trainer</p>

                <div className="bg-white my-4 p-4 rounded">
                    
                   
                    <div id='startScreen' className=''>
                        
                        <button id='btn' className='btn-block btn-warning header-btn' onClick={hideStart}>Start</button>
                    </div>

                    <div id='quizContainer' className='hidden'></div>

                    <div id='trainerSelect' className='hidden container'>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>

    
    )
}
export default Quiz
