import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../designs/Home.css";

function Home() {
    
    return (
<div>
  <NavBar />

    <div className="home"></div>
    <div className="info-home"><h5>Welcome to Calibre Interior Designs<br></br>
<p>Experience the art of creating captivating spaces that reflect your unique style and elevate your home to new heights. At Calibre Interior Designs, we specialize in transforming houses into personalized sanctuaries that exude warmth, comfort, and sophistication.</p>
<p>Our team of talented designers possesses a deep passion for interior aesthetics and an unwavering commitment to exceeding your expectations. With a keen eye for detail and a wealth of design expertise, we seamlessly blend functionality with beauty, crafting spaces that harmonize with your lifestyle and inspire a sense of joy</p>

    <br/></h5>

  </div>
  <Footer/>
</div>

    );
}

export default Home;
