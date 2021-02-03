import React from "react";
import { Link } from "react-router-dom";

export function Tools(props) {
  return <p>{props.tools}</p>;
}
export function ScreenCap(props) {
  return <img src={props.imageUrl} alt={props.alt} />;
}
export function WhatIsIt(props) {
  return (
    <>
      <div className="box skills">
        <p>{props.description}</p>
        <ul>
          <li>
            Github: <a href={props.github}>{props.github}</a>
          </li>
          <li>
            Live App: <a href={props.liveApp}>{props.liveApp}</a>
          </li>
          <li>
            {props.extraName} <a href={props.extraLink}>{props.extraLink}</a>
          </li>
        </ul>
        <small>{props.extraNote}</small>
      </div>
    </>
  );
}
export function Improvements(props) {
  return (
    <>
      <div className="box skills">
        <p className="subtitle">Improvements</p>
        <ul>
          <li>{props.improvements}</li>
        </ul>
      </div>
    </>
  );
}

export function ImgGallLink(props) {
  return (
    <Link to={props.route}>
      <div className="gallery-item">      
      <figure className="image content">
        <img src={props.src} alt={props.alt} style={{ width: "250px" }} />
      </figure>
      </div>
    </Link>
  );
}
