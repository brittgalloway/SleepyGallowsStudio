import React from "react";
import Nav from "../../../../../components/Nav";
import { NavAnimation, PLHnav } from "../../../../../components/Navigation";
// import "./style.scss";

function PHL() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavAnimation />
          <PLHnav />
          <h1>Art of FOR PEACE, LOVE, &amp; HARMONY? </h1>
          <p>Images will go here</p>
        </div>
      </div>
    </>
  );
}

export default PHL;
