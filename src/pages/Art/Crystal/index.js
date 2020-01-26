import React from "react";
import Nav from "../../../components/Nav";
import { NavCrystalArt } from "../../../components/Navigation";
import { FooterCrystal } from "../../../components/Footer";
// import "./style.css";

function Crystal() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavCrystalArt />
          <div className="container is-fluid">
            <div className="columns is-multiline is-mobile">
              {/* {videos.map(video => (
                <VideoLinks
                  key={video.embed}
                  title={video.title}
                  embed={video.embed}
                  year={video.year}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <FooterCrystal />
    </>
  );
}

export default Crystal;
