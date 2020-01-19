import React from "react";
import Nav from "../../components/Nav";
// import "./style.css";

function Comics() {
  return (
    <>
      <div className="columns">
        <div className="column is-3">
          <Nav />
        </div>
        <div className="column is-9">
          <h1>Comics Animation</h1>
          <h2>About 2Heroes</h2>
        </div>
      </div>
    </>
  );
}

export default Comics;
