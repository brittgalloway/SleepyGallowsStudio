import React from "react";
import VideoLinks from "../../../components/VideoLinks";
import videos from "./videos.json";
import { NavAnimation } from "../../../components/Navigation";
import Nav from "../../../components/Nav";
import { FooterSleepy } from "../../../components/Footer";
import "./style.scss";
function ForFun() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-narrow">
          <Nav />
        </div>
        <div className="column">
          <div id="videos">
            <NavAnimation />

            <div className="container is-fluid">
              <h1 className="title has-text-centered">Fun Animations</h1>
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

export default ForFun;
