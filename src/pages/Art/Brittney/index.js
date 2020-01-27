import React from "react";
import Nav from "../../../components/Nav";
import { NavBrittneyArt } from "../../../components/Navigation";
import { ImgGall } from "../../../components/Galleries";
import { FooterBrittney } from "../../../components/Footer";
import sketchImg from "./sketchImg.json";
// import "./style.scss";

function Brittney() {
  const state = {
    sketchImg
  };
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavBrittneyArt />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              {state.sketchImg.map(img => (
                <ImgGall src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterBrittney />
    </>
  );
}

export default Brittney;
