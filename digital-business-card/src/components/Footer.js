import React from "react";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import facebook2 from "../images/facebook2.png";
import github from "../images/github.png";



export default function Footer(){
    return(
        <div className="box--footer">
            <div className="footer--details">
              <img src= {insta} alt="insta"/>
              <img src= {twitter} alt="twitter"/>
              <img src= {facebook2} alt="facebook"/>
              <img src= {github} alt="github"/>
            </div>
        </div>
    )
};