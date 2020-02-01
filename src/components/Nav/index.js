import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
function Nav() {
  return (
    <aside className="menu is-hidden-mobile">
      <Link to="/">
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
  );
}
export default Nav;
