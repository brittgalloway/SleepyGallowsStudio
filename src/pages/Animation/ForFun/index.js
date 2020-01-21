import React from "react";
import VideoLinks from "../../../components/VideoLinks";
import videos from "./videos.json";
import { NavAnimation } from "../../../components/Navigation";

import "./style.scss";
function ForFun() {
  return (
    <>
      <NavAnimation />
      <h1>Causual Fun Animations</h1>
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
    </>
  );
}

export default ForFun;
