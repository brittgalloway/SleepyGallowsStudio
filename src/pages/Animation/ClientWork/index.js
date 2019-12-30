import React from "react";
import VideoLinks from "../../../components/VideoLinks";
// import videos from "./videos.json";

import "./style.scss";

function ClientWork() {
  return (
    <>
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
    </>
  );
}

export default ClientWork;
