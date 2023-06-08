import { Link } from "react-router-dom";
import React from "react";
import "../designs/NavBar.css";
import logo from "../images/Logo.png";

function NavBar() {
    return (
     
            <div className="navigation">
              
              <img src={logo} alt="Logo" className="logoImg"/>
              <nav>
                <ul id="mainmenu">
                  <li className="menu-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/interior">Interior</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          );
        }
        
export default NavBar;