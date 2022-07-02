import React from "react";
import "./Footer.css";
import Waver from "../../img/wave.png";
import Insta from"@iconscout/react-unicons/icons/uil-instagram";
import Facebook from"@iconscout/react-unicons/icons/uil-facebook";
import GitHub from"@iconscout/react-unicons/icons/uil-github";

const Footer = ()=>{
    return(
        <div className="footer">
            <img src={Waver} alt="" style={{width: "100%"}}/>
            <div className="f-content">
                <span>sundy.2008@hotmail.com</span>
                <div className="f-icons">
                    <Insta size="3rem" color="white"/>
                    <Facebook size="3rem" color="white"/>
                    <GitHub size="3rem" color="white"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;