import React, { useState } from "react";
import QRCode from "qrcode.react";
import logo from "../images/Edit2.png";
import Logo from "../images/CID LOGO APPROVED-01.png";
import "../designs/QR.css";


function QrCode() {

    const [contact, setContact] = useState({

        name: "CALIBRE INTERIOR DESIGN",

        phoneNumber: "081 725 7840",

        email: "Calibreinterior.design@gmail.com",

        company: "calibreinterior.co.za",

        address: "1 MUSHROOM RD, WATERFALL CITY, MIDRAND. GAUTENG",

        services: [

            "Interior Decor",

            "Wallpaper",

            "Luxury TV Unit",

            "House Renovations",

            "Bespoke Furniture",

            "Wall Panelling",

            "Slats Panels",

        ],

    });




    const generateVCard = () => {

        const servicesString = contact.services.join(";");




        const vCardData = `BEGIN:VCARD
    
    VERSION:3.0
    
    N:${contact.name}
    
    TEL:${contact.phoneNumber}
    
    EMAIL:${contact.email}
    ADR:${contact.address}
    
    URL:${contact.company}
    
    X-SERVICES:${servicesString}
    
    END:VCARD`;




        return vCardData;

    };

    return (



<div className="qrcode">
        < div className="business-card" >
            <div className="background-images">

                <div className="background-image-calibre" />

                <div className="background-image-inter" />

                <div className="background-image-des" />

            </div>
            <div className="contact-info">

                <h1>{contact.name}</h1>

                <p>

                    <strong>Phone Number:</strong>

                    <p>{contact.phoneNumber}</p>

                </p>
                <p>

                    <strong>Email:</strong> {contact.email}

                </p>
                <p>

                    <strong>Web:</strong>

                    <p>{contact.company}</p>

                </p>

            </div>
            <div className="logo-container">

                <img src={Logo} alt="Logo" className="logo" />

            </div>
            <div className="qrcode-container">

                <QRCode

                    className="qrcode"

                    value={generateVCard()}

                    fgColor="#000000"

                    qrStyle={{ maxwidth: "100px", maxheight: "100px" }}

                    imageSettings={{

                        src: logo,

                        height: 30,

                        width: 30,

                        excavate: true,

                    }}

                />

            </div>
        </div >
        </div>



    );
}
export default QrCode;