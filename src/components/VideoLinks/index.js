import React from "react";

function VideoLinks(props) {
  return (
    <div className="column is-one-quarter">
      <figure className="image is-16by9">
        <h2>{props.title}</h2>
        <iframe
          className="has-ratio"
          width="640"
          height="360"
          src={props.embed}
          frameB
          order="0"
          allowFullScreen
        ></iframe>
        <sub>{props.year}</sub>
      </figure>
    </div>
  );
}

export default VideoLinks;
