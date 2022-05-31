import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav id="get-access" className="navbar">
        <div className="navbar-container">
            <a href="/"><img src="/logo.svg" alt="React Logo" height="35" /></a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
