import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <Link to="/">Home (or LOGO image?)</Link>
        </li>
        <li>
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
