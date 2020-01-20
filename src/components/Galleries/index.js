import React from "react";
// import "./style.css";

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
