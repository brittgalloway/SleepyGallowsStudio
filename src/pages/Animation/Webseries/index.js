import React from "react";
import { NavAnimation } from "../../../components/Navigation";
import { Nav, NavBur } from "../../../components/Nav";
import { ImgGallLink } from "../../../components/Galleries";
import { FooterSleepy } from "../../../components/Footer";
import webSeriesThumb from "./webSeriesThumb.json";
// import "./style.css";

function Webseries() {
  const state = {
    webSeriesThumb
  };
  return (
    <>
      <div className="columns is-gapless">
      <div className="column is-fixed is-one-fifth">
          <Nav />
          <NavBur />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-9 is-offset-3">
          <NavAnimation />
          <h1 className="title has-text-centered">Webseries</h1>
          <hr />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              {state.webSeriesThumb.map(img => (
                <ImgGallLink route={img.route} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
        
          </div>
        </div>
        
      </div>
      <FooterSleepy />
    </>
  );
}

export default Webseries;
