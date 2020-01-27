import React from "react";
import Nav from "../../../components/Nav";
import { NavCrystalArt } from "../../../components/Navigation";
import { ImgGall } from "../../../components/Galleries";
import { FooterCrystal } from "../../../components/Footer";
import illustrateImg from "./illustrateImg.json";
// import "./style.css";

function Crystal() {
  const state = {
    illustrateImg
  };
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavCrystalArt />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              {state.illustrateImg.map(img => (
                <ImgGall src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterCrystal />
    </>
  );
}

export default Crystal;
