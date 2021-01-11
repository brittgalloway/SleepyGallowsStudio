import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
export function Nav() {
  return (
 <aside className="menu is-hidden-touch">
        <Link to="/About" >
        <div className="tooltip">
  <span className="tooltiptext">About Us</span>

      
          <img   
            id="header"
            src={process.env.PUBLIC_URL + "/images/pageHeader_sgHomepgNav.svg"}
            alt="Sleepy Gallows Logo. Click for About Page."
          />
          </div>
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
          <li className="nav-item">
          <Link to="/GraphicDesign">Graphic Design</Link>
        </li>
        </ul>
      </aside>
    
  )
}
export function NavBur() {
  const [isNavOpen, navIsOpen] = useState(0);
  return isNavOpen ? (
    <nav className="is-hidden-desktop" onClick={() => navIsOpen(0)}>
      <ul className="nav is-hidden-desktop flex-column ">
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
        <li className="nav-item">
          <Link to="/GraphicDesign">Graphic Design</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <span className="hamburger is-hidden-desktop"onClick={() => navIsOpen(1)}>&#9776;</span>
  );
}
