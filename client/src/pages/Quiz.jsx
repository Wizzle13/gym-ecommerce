import React from 'react';
// import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Quiz() {
    return (
        <div id='presentaion'>
            <div className='pr-heading'>
                <h1>What is your workout focus?</h1>
                <div className='pr-btns'>
                    <Link to="../emerald" className='pr-btn'>Cardio</Link>
                </div>
                <div className='pr-btns'>
                    <Link to="../bill" className='pr-btn'>Strength</Link>
                </div>
                <div className='pr-btns'>
                    <Link to="../steve" className='pr-btn'>Wellness</Link>
                </div>
            </div>
        </div>
    )
}
export default Quiz
