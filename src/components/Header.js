import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return(
    <div>
      <header>
        <h1>Watcha Watchin?</h1>
        <p>Find out what's popular or in theatres!</p>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header;