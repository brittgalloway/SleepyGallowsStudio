import React from "react";

function VideoLinks(props) {
  return (
    <div className="column is-one-quarter">
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
      <h1>{props.title}</h1>
      <small>{props.year}</small>
    </div>
  );
}

export default VideoLinks;
