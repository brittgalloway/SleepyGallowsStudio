import React from "react";
import Nav from "../../components/Nav";
// import "./style.css";

function Comics() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <h1>Comics Animation</h1>
          <h2>About 2Heroes</h2>
        </div>
      </div>
    </>
  );
}

export default Comics;
