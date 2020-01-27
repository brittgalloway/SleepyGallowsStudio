import React from "react";
import Nav from "../../../../components/Nav";
import { NavBrittneyArt } from "../../../../components/Navigation";
import { ImgGall } from "../../../../components/Galleries";
import { FooterBrittney } from "../../../../components/Footer";
import paperImg from "./paperImg.json";

// import "./style.scss";

function PaperCut() {
  const state = {
    paperImg
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
              {state.paperImg.map(img => (
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

export default PaperCut;
