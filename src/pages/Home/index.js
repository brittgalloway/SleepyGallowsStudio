import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <>

      <div id="homeContainer">
      
        <Link to="/Animation">
            <p id="homeText1">Animation</p>
          <div id="animationHome">
          </div>
        </Link>
        <Link to="/Art">
            <p id="homeText2">Art</p>
          <div id="artHome">
          </div>
        </Link>
        <Link to="/Comics">
            <p id="homeText3">Comics</p>
          <div id="comicHome">
          </div>
        </Link>
        <Link to="/Design">
            <p id="homeText4">
            Design
            </p>
          <div id="webdevHome">
          </div>
        </Link>
        </div>
    </>
  );
}

export default Home;
