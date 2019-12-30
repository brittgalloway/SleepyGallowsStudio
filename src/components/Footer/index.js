import React from "react";
import "./style.css";

export function SubmitBtn() {
  return <button>Submit</button>;
}
// export function RouteBtn(props) {
//   <a className="btn btn-primary" href={props.Linkto} role="button">
//     {props.routes}
//   </a>;
// }
export function DonateBtn() {
  return (
    <a className="btn btn-primary" href="/donate" role="button">
      Donate Now!
    </a>
  );
}
export function AboutBtn() {
  return (
    <a className="btn btn-primary" href="/about" role="button">
      About
    </a>
  );
}
