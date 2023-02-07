import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return(
    <div>
      <header>
        <h1>Watcha Watchin?</h1>
        <div>Find out what's popular or in theatres!</div>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header;