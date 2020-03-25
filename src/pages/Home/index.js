import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <>
      <div id="homeContainer">
      
        <Link to="/Animation">
          <div id="animationHome">
            <p className="homeText longWord">Animation</p>
      </div>
        </Link>
          </div>
        <Link to="/Art">
          <div id="artHome">
            <p className="homeText">Art</p>
          </div>
        </Link>
        <Link to="/Comics">
          <div id="comicHome">
            <p className="homeText">Comics</p>
          </div>
        </Link>
        <Link to="/WebDev">
          <div id="webdevHome">
            <p className="homeText longWord">
              Web <br />
              Development
            </p>
          </div>
        </Link>
    </>
  );
}

export default Home;
