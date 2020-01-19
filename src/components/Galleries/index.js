import React from "react";
// import "./style.css";

export function Tools(props) {
  return <li>{props.tools}</li>;
}
export function ScreenCap(props) {
  return <img src={props.imageUrl} alt={props.alt} />;
}
export function WhatIsIt(props) {
  return (
    <>
      <li>Github: {props.github}</li>
      <li>LinkedIn: {props.linkedIn}</li>
      <p>{props.description}</p>
    </>
  );
}
export function Improvements(props) {
  return (
    <>
      <ul>
        <li>{props.Improvements}</li>
      </ul>
    </>
  );
}
