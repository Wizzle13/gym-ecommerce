import React from 'react';
// import {Link} from 'react-router-dom';

function Quiz() {
    return (
        <div class="min-vh-100 d-flex align-items-center bg-dark">

            <div class="w-100 row justify-content-center">

                <div class="col-10 col-md-6 col-lg-5">

                    <h1 class="display-3 text-center text-white">Workout Personality Quiz</h1>

                    <p id="subLine" class="text-center text-white"> Answer the Questions and Match with your Personal Trainer</p>

                    <div class="bg-white my-4 p-4 rounded">
                        
                    
                        <div id="startScreen">
                            
                            <button id="btn" class="btn-block btn-warning">Start</button>
                        </div>

                        <div id="quizContainer" class="hidden"></div>

                        <div id="trainerSelect" class="hidden container">
                            
                        </div>
                        
                    </div>
                </div>

            </div>
            {/* <script src="../../quiz.js"></script> */}
        </div>

        
    )
}
export default Quiz
