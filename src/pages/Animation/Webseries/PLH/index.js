import React from "react";
import VideoLinks from "../../../../components/VideoLinks";
import videos from "./videos.json";
import Nav from "../../../../components/Nav";
import { NavAnimation, PLHnav } from "../../../../components/Navigation";
import { FooterSleepy } from "../../../../components/Footer";
import "./style.scss";

function PHL() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <div id="videos">
            <NavAnimation />
            <div className="container is-fluid">
              <PLHnav />
              <h1 className="title has-text-centered">
                For Peace, Love, &amp; Harmony
              </h1>
              <hr />
              <div className="columns is-multiline is-mobile">
                {videos.map(video => (
                  <VideoLinks
                    key={video.embed}
                    title={video.title}
                    embed={video.embed}
                    year={video.year}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default PHL;
