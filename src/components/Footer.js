import React from "react";
import "./Footer.css";
import coffee from "./bmc-button.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <a
         href="https://www.buymeacoffee.com/Jfaigan" 
         target="blank" 
         alt="Buy me a coffee">
         <img id="coffee" src={coffee} alt="Coffee"></img>
        </a>
        <p>Created by Josh Faigan Copyright 2023</p>
      </div>
    </div>
  );
}

export default Footer;