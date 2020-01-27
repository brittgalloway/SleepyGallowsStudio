import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
export function NavWeb() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/Webdev" className="navbar-item">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
export function NavAnimation() {
  return (
    <div className="tabs is-centered is-small">
      <ul>
        <li>
          <Link to="/Animation/webseries">Web Series</Link>
        </li>
        <li>
          <Link to="/Animation/clientwork">Client Work</Link>
        </li>
        <li>
          <Link to="/Animation/forfun">For Fun</Link>
        </li>
      </ul>
    </div>
  );
}
export function PLHnav() {
  return (
    <div className="tabs is-centered is-medium">
      <ul>
        <li>
          <Link to="/Animation/webseries/plh">Watch</Link>
        </li>
        <li>
          <Link to="/Animation/webseries/plh/about">About</Link>
        </li>
        <li>
          <Link to="/Animation/webseries/plh/art">Art</Link>
        </li>
      </ul>
    </div>
  );
}
export function NavCrystalArt() {
  return (
    <div className="tabs is-centered is-medium">
      <ul>
        <li>
          <Link to="/Art/Crystal">Illustration</Link>
        </li>
        <li>
          <Link to="/Art/Crystal/visdev">Visual Development</Link>
        </li>
      </ul>
    </div>
  );
}
export function NavBrittneyArt() {
  return (
    <div className="tabs is-centered is-medium">
      <ul>
        <li>
          <Link to="/Art/Brittney">My Sketchbook</Link>
        </li>
        <li>
          <Link to="/Art/Brittney/papercut">Papercut Outs</Link>
        </li>
      </ul>
    </div>
  );
}
