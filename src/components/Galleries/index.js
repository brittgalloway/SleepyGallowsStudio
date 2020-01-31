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
      <p>{props.description}</p>
      <li>
        Github: <a href={props.github}>{props.github}</a>
      </li>
      <li>
        Live App: <a href={props.liveApp}>{props.liveApp}</a>
      </li>
      <li>
        {props.extraName} <a href={props.extraLink}>{props.extraLink}</a>
      </li>
      <small>{props.extraNote}</small>
    </>
  );
}
export function Improvements(props) {
  return (
    <>
      <p className="subtitle">Improvements</p>
      <ul>
        <li>{props.improvements}</li>
      </ul>
    </>
  );
}

export function ImgGallLink(props) {
  return (
    <Link to={props.route}>
      <figure className="image ">
        <img src={props.src} alt={props.alt} />
      </figure>
    </Link>
  );
}
