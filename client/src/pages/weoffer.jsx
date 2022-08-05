import React from 'react';
import Featurebox from'./whatweoffer';
import figure1 from '../images/gym1.svg';
import figure2 from '../images/gym2.svg';
import figure3 from '../images/yoga2.svg';
import figure4 from '../images/cardio1.svg';
function Feature() {
    return (
        <div id='features'>
            <h1>We Offer</h1>
            <div className='a-container'>
                <Featurebox image={figure1} title="WeightLifting"/>
                <Featurebox image={figure2} title="Specific Muscle"/>
                <Featurebox image={figure3} title="Yoga"/>
                <Featurebox image={figure4} title="Cardio Exercise"/>
            </div>
            
        </div>
    )
}

export default Feature
