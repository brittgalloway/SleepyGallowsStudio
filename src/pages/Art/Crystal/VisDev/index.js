import React from "react";

import Nav from "../../../../components/Nav";
import CharGall from "../../../../components/CharGall";
import VisDevGall from "../../../../components/VisDevGall";
import { NavCrystalArt } from "../../../../components/Navigation";
import { FooterCrystal } from "../../../../components/Footer";

// import "./style.css";

function VisDev() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-narrow">
          <Nav />
        </div>
        <div className="column">
          <NavCrystalArt />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              <div>
                <h1 className="subtitle">Character Design</h1>
                <CharGall />

                <div>
                  <h1 className="subtitle">Visual Design</h1>
                  <VisDevGall />
                </div>
              </div>
            </div>
            <div className="columns is-full">
              <article>
                <h1 className="subtitle">The Little Mermaid</h1>
                <p>
                  I read the Little Mermaid by Hans Cristian Anderson for the
                  first time a couple of years ago and I was very surprised when
                  I read it because in every version of the tale that I saw on
                  film it took place somewhere in Europe, or at least a fantasy
                  place inspired by Europe. However when I read the tale it did
                  not seem like a European setting. It felt eastern. Perhaps it
                  was just the translation from the version that I read, but the
                  fact that they would say palace instead of castle and temple
                  instead of church really had my thinking. I did a lot of
                  research on where it could have taken place and I saw the
                  illustrations that Edmund Dulac did for the tale which have
                  very heavy Eastern influence. I decided that I wanted to
                  redesign the story set in India. It is still a far off idea,
                  but I hope to be able to turn this into a full movie on day.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <FooterCrystal />
    </>
  );
}

export default VisDev;
