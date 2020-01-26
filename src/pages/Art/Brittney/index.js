import React from "react";
import Nav from "../../../components/Nav";
import { NavBrittneyArt } from "../../../components/Navigation";
import { FooterBrittney } from "../../../components/Footer";
// import "./style.scss";

function Brittney() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavBrittneyArt />
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
      <FooterBrittney />
    </>
  );
}

export default Brittney;
