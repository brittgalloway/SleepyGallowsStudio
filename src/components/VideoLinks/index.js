import React from "react";

function VideoLinks(props) {
  return (
    <div className="column is-one-quarter">
      <h2>{props.title}</h2>
      <figure className="image is-16by9">
        <iframe
          className="has-ratio"
          width="640"
          height="360"
          src={props.embed}
          frameB
          order="0"
          allowFullScreen
        ></iframe>
      </figure>
      <sub>{props.year}</sub>
    </div>
  );
}

export default VideoLinks;
