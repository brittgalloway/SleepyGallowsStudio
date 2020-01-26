import React from "react";
import { Link } from "react-router-dom";
// import "./nav.scss";
export function NavWeb() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
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
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/Animation/webseries" className="navbar-item">
            Web Series
          </Link>
          <Link to="/Animation/clientwork" className="navbar-item">
            Client Work
          </Link>
          <Link to="/Animation/forfun" className="navbar-item">
            For Fun
          </Link>
        </div>
      </div>
    </nav>
  );
}
export function PLHnav() {
  return (
    <div className="tabs is-centered is-medium">
      <ul>
        <li className="is-active">
          <Link to="/Animation/webseries/plh">
            <span>Watch</span>
          </Link>
        </li>
        <li>
          <Link to="/Animation/webseries/plh/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/Animation/webseries/plh/art">
            <span>Art</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export function NavCrystalArt() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/Art/Crystal" className="navbar-item">
            Illustration
          </Link>
          <Link to="/Art/Crystal/visdev" className="navbar-item">
            Visual Development
          </Link>
        </div>
      </div>
    </nav>
  );
}
export function NavBrittneyArt() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/Art/Brittney" className="navbar-item">
            My Sketchbook
          </Link>
          <Link to="/Art/Brittney/papercut" className="navbar-item">
            Papercut Outs
          </Link>
        </div>
      </div>
    </nav>
  );
}
