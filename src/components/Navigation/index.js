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
          <Link to="/Animation" className="navbar-item">
            Back to Animation
          </Link>
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
export function NavCrystalArt() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/Art" className="navbar-item">
            Back to Art
          </Link>
          <Link to="/Art/Crystal/illustration" className="navbar-item">
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
          <Link to="/Art" className="navbar-item">
            Back to Art
          </Link>
          <Link to="/Art/Brittney/sketchbook" className="navbar-item">
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
