import React from "react";
import VideoLinks from "../../../../components/VideoLinks";
import videos from "./videos.json";
import Nav from "../../../../components/Nav";
import "./style.scss";

function PHL() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <h1>About PHL (drop down/extend)</h1>
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
    </>
  );
}

export default PHL;
