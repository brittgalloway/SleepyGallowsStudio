import React from "react";

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
      <li>Github: {props.github}</li>
      <li>Live App: {props.liveApp}</li>
      <li>
        {props.extraName} {props.extraLink}
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
