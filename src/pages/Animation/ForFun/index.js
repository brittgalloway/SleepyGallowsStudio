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
        <div className="column is-fixed is-one-fifth">
          <Nav />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-9 is-offset-3">
              <div className="column is-four-fifth">
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
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default ForFun;
