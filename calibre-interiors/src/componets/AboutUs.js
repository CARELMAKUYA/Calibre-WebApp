import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import lolo from "../images/CALIBRE APPROVED LOGO.jpg";
import "../designs/About.css"; // Import CSS file for styling

function AboutUs() {
    return (
        
        <div className="page-container">
            <div className="content-wrap">
                <NavBar />

                <div className="container">
                    <div className="image">
                        <img src={lolo} alt="About Us" />
                    </div>
                    <div className="info">
                        <h2>About Us</h2>
                        <p>At Calibre Interior Designs, we believe that a beautifully designed space has the power to transform lives. 
                            We are passionate about creating environments that inspire, captivate, and reflect the unique personalities
                             and lifestyles of our clients. With our expertise in interior design and a keen eye for detail, we aim to 
                             make every space we touch a true masterpiece.</p>
                    <h2>Our Approach</h2>
                    <p>At the heart of our design philosophy is a deep understanding of our clients' needs, aspirations, and personal style.
                         We take the time to listen, collaborate, and bring your vision to life. Whether you're looking to revamp 
                         a single room or embark on a full-scale renovation, we tailor 
                         our services to meet your specific requirements.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
