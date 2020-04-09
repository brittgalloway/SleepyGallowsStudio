import React from "react";
import VideoLinks from "../../../components/VideoLinks";
import { Nav, NavBur } from "../../../components/Nav";
import videos from "./videos.json";
import { NavAnimation } from "../../../components/Navigation";
import { FooterSleepy } from "../../../components/Footer";

function ClientWork() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-fixed is-3">
          <Nav />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-8 is-offset-3">
              <div className="column is-four-fifth">
          <NavBur />
                <div>
                  <NavAnimation />
                  <div className="container is-fluid">
                    <h1 className="title has-text-centered">
                      Client Work Animation
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
          <FooterSleepy />
        </div>
      </div>
    </>
  );
}

export default ClientWork;
