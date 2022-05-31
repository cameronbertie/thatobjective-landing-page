import React from "react";
import './ThirdSection.css';
import Waves from './Waves.js';


function ThirdSection() {
  return (
    <div className="third-section-bg-image">
    <div className="third-section-outer-container collapse">
      <div className="third-section-inner-container">
        <div className="third-section-box-1">
        <Waves />
    </div>
    <div className="third-section-box-2">
    <video autoPlay muted loop className="web-video"><source src="/web-video-v3.mp4" type="video/mp4"></source></video>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ThirdSection;
