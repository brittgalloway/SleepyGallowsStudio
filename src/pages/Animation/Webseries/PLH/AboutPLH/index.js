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
          <div className="container is-fluid">
            <PLHnav />
            <h1 className="title">WHAT IS FOR PEACE, LOVE, &amp; HARMONY? </h1>
            <p>
              For Peace, Love, Harmony (PLH) is a mini youtube series created by
              the Sleepy Gallows as a means of practicing production and visual
              design. It is a video series that is staged to look like you are
              watching the walk through of an RPG video game. We've always had a
              strong attraction to fantasy and regal aesthetics,so this story
              takes place in a fairy ring. Our main character, Harmony, is a
              lower class fay who is swept into some royal madness while the
              kingdom undergoes a political and territorial struggle. All of the
              visual design and execution was done by Crystal with watercolor,
              goauche and ink; while Brittney, is bringing it all to life
              through traditional hand drawn animation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PHL;
