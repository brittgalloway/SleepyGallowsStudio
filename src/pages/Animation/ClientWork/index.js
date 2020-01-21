import React from "react";
import VideoLinks from "../../../components/VideoLinks";
import Nav from "../../../components/Nav";
import { NavAnimation } from "../../../components/Navigation";

// import videos from "./videos.json";

import "./style.scss";

function ClientWork() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavAnimation />
          <h1>ClientWork Animation</h1>
          <div className="columns is-multiline is-mobile">
            {/* {videos.map(video => (
          <VideoLinks
            key={video.embed}
            title={video.title}
            embed={video.embed}
            year={video.year}
          />
        ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientWork;
