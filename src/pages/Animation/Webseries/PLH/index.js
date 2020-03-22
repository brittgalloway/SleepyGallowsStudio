import React from "react";
import VideoLinks from "../../../../components/VideoLinks";
import videos from "./videos.json";
import { Nav, NavBur } from "../../../../components/Nav";
import { NavAnimation, PLHnav } from "../../../../components/Navigation";
import { FooterSleepy } from "../../../../components/Footer";
import "./style.scss";

function PHL() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-fixed is-one-fifth">
          <Nav />
          <NavBur />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-9 is-offset-3 ">
              <div className="column is-four-fifth ">
                <div>
                  <NavAnimation />
                  <div className="container is-fluid is-full-mobile is-full-tablet">
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
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default PHL;
