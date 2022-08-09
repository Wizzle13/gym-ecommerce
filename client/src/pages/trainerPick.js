import React from 'react';
import trainer1 from '../images/trainer1.jpg';
import trainer2 from '../images/trainer2.jpg';
import trainer3 from '../images/trainer3.jpg';
function Trainer() {
    return (
    <div className="min-vh-100 d-flex align-items-center bg-dark">

        <section className="w-100 row justify-content-center m-3">
            <div className=""><img className="picture" src={trainer1} alt="" /></div>
            <div className="col-10 text-center text-white btn btn-success" id="trainer1">Emerald</div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="w-100 row justify-content-center m-3">
            <div className=""><img className="picture" src={trainer2} alt="" /></div>
            <div className="col-10 text-center text-white btn btn-success" id="trainer2">Bill</div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="w-100 row justify-content-center m-3">
            <div className=""><img className="picture" src={trainer3} alt="" /></div>
            <div className="col-10 text-center text-white btn btn-success" id="trainer3">Steve</div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </div>
    )
}

export default Trainer
