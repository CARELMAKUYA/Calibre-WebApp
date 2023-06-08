import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import QrCode from "./QrCode";
import "../designs/Contact.css";

function Contact() {
    
    return (
        <div className="contact" >
        
            <NavBar />
            <QrCode/> 
            <Footer/>
          
            </div>
       
    );
}

export default Contact;
