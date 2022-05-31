import React from "react";
import './SecondSection.css';


function SecondSection() {
  return (
    <div className="second-section-outer-container collapse">
      <div className="second-section-inner-container">
        <div className="second-section-box-1">
      
      <img className="task-image" src="/task-image.png" alt="screenshot of the app"></img>
    </div>
    <div className="second-section-box-2">
      <h2 className="box-heading">
        OUR OBJECTIVE
      </h2>
      <p className="box-text">
      Gamers often put a lot of hours into a game to perfect their craft, and reaching full potential requires players to be in a healthy physical and mental state.
      </p>
      <p className="box-text">We set out to create a to-do list app that helps gamers maximise productivity, stay healthy and conquer everyday tasks on and off the game.</p>
    </div>
    </div>
    </div>
  );
}

export default SecondSection;
