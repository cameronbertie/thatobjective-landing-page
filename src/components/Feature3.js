import React from "react";
import "./FeatureRight.css";

function Feature3() {
  return (
    <div className="feature-right-outer-container collapse">
      <div className="feature-right-inner-container">
        <div className="feature-right-box-1">
          <div>
            <h2 className="feature-heading">
              CREATE CUSTOM LISTS FOR THE THINGS THAT MATTER MOST TO YOU
            </h2>
            <p className="feature-text">
              Got a list of "movies to watch" or a list of "books to read"? With
              the custom list feature you can keep lists of the things that
              matter most in your life separate from your timeline, so that it
              can be accessed quickly whenever you need it.
            </p>
          </div>
        </div>
        <div className="feature-right-box-2">
          <img className="svg-icon" src="/gamer-geek.svg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Feature3;
