import React from "react";
import images from "../images/person.png";
import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.jpeg";



export default function Info(){
    return(
        <div className="info--details">
           <img src={images} alt="person"/>
           <h1 className="person--name">Cynthia Jepkosgei Misoi</h1>
           <h2 className="job--title">Software Developer</h2>
           <h3 className="company--name">DewCis Solutions Limited</h3>
           <div className="buttons">
           <div className="email--button">
            <img src={emailIcon} alt="email-icon"/>
            <p>Email</p>
             </div>
            
            <div className="linkedin--button">
            <img src={linkedinIcon} alt="linkedin-icon"/>
             <p>Linkedin</p>
            </div>
           </div>
        </div>
    )
};