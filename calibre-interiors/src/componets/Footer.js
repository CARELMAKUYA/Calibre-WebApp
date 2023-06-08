import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import "../designs/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <span className="footer-text">© CAREL. All rights reserved.</span>
        <div className="footer-icons">
          <a href="https://www.instagram.com/calibreinterior_design" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://www.facebook.com/CalibreInteriorDecor" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

