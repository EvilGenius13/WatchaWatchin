import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {

  return(
    <div>
      <header>
        <h1>Whatcha Watchin?</h1>
        <nav>
          <NavLink to="/actor/">Actors</NavLink>
          <NavLink to="/">Movies</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header;