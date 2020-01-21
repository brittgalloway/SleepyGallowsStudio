import React from "react";
import { Link } from "react-router-dom";
import "./navComic.scss";
function NavComic() {
  return (
    <aside className="menu" id="comicMenu">
      <ul className="menu-list" id="comicMenuList">
        <li>
          <Link to="/">
            <img
              id="comicHeader"
              src={
                process.env.PUBLIC_URL + "/images/pageHeader_sgHomepgNav.svg"
              }
              alt="Sleepy Gallows Navigation"
            />
          </Link>
        </li>
        <li id="comicFirstLink">
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
export default NavComic;
