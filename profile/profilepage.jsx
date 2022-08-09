import React from "react";
import "./Profile.css";

const Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src="./gymlogo.png" alt="John" style={{ width: "100%" }} />
        <h1 id="NameOfuser">Your name</h1>
        <p className="trainer">Personal Trainer</p>
        <p id="NameOftrainer">Trainers name</p>
      
        <p>
          <button>Home Page</button>
        </p>
      </div>
    </div>
  );
};
export default Card;
