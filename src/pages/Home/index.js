import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <>
      <div className="gridContainer">
        <Link to="/Animation">
          <div id="animationHome">Animation</div>
        </Link>
        <Link to="/Art">
          <div id="artHome">Art</div>
        </Link>
        <Link to="/Comics">
          <div id="comicHome">Comics</div>
        </Link>
        <Link to="/WebDev">
          <div id="webdevHome">Web Development</div>
        </Link>
      </div>
    </>
  );
}

export default Home;
