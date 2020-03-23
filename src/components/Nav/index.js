import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
export function Nav() {
  return (
 <aside className="menu is-hidden-touch">
        <Link to="/About">
          <img
            id="header"
            src={process.env.PUBLIC_URL + "/images/pageHeader_sgHomepgNav.svg"}
            alt="Sleepy Gallows Navigation"
          />
        </Link>
        <ul className="menu-list">
          <li id="firstLink">
            <Link to="/Animation">Animation</Link>
          </li>
          <li>
            <Link to="/Comics">Comics</Link>
          </li>
          <li>
            <Link to="/Art">Art</Link>
          </li>
          <li>
            <Link to="/WebDev">WebDev</Link>
          </li>
        </ul>
      </aside>
    
  )
}
export function NavBur() {
  const [isNavOpen, navIsOpen] = useState(false);
  return isNavOpen ? (
    <nav onClick={() => navIsOpen(false)}>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Animation">Animation</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comics">Comics</Link>
        </li>
        <li className="nav-item">
          <Link to="/Art">Art</Link>
        </li>
        <li className="nav-item">
          <Link to="/WebDev">WebDev</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <span className="hamburger is-hidden-desktop"onClick={() => navIsOpen(true)}>&#9776;</span>
  );
}
