import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container collapse">
          <div className="footer-logo-container">
          <a href="/">
            <img className="footer-logo" src="/logo.svg" alt="React Logo" height="35" />
          </a>
          </div>
          <br></br>
          {/* <h4 className="footer-email"><a href="mailto:contact@10controls.com">contact@10controls.com</a></h4> */}
          <h5 className="footer-copyright">The design and appearance of the app is not final and is subject to change upon release</h5>
          <h5 className="footer-copyright">Created by Cameron Bertie</h5>
        </div>
      </footer>
    </>
  );
}

export default Footer;
