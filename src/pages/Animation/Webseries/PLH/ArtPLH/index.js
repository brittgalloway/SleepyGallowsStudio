import React from "react";
import Nav from "../../../../../components/Nav";
import { NavAnimation, PLHnav } from "../../../../../components/Navigation";
import { ImgGall } from "../../../../../components/Galleries";
import { FooterSleepy } from "../../../../../components/Footer";
import artOfPlhImg from "./artOfPlhImg.json";
// import "./style.scss";

function PHL() {
  const state = {
    artOfPlhImg
  };
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavAnimation />
          <PLHnav />
          <h1 className="title has-text-centered">
            Art of FOR PEACE, LOVE, &amp; HARMONY
          </h1>
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              {state.artOfPlhImg.map(img => (
                <ImgGall src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default PHL;
