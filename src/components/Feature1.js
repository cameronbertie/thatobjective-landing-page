import React from "react";
import './FeatureRight.css';


function Feature1() {
  return (
    <div className="feature-right-outer-container collapse">
      <div className="feature-right-inner-container">
        <div className="feature-right-box-1">
          <div>
        <h2 className="feature-heading">More than a to-do list</h2>
      <p className="feature-text">
        Not only does this app help you to keep track of your upcoming tasks and events. You can also plan meals, save recipes, store workout routines, set sleeping hours, schedule gaming or practice sessions and so much more.
      </p>
      </div>
    </div>
    <div className="feature-right-box-2">
    <img className="svg-icon" src="/gaming-screen.svg" alt=""></img>
    </div>
    </div>
    </div>
  );
}

export default Feature1;
