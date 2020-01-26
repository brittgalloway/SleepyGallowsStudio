import React from "react";
import Nav from "../../../../components/Nav";
import { NavCrystalArt } from "../../../../components/Navigation";
// import { ImgGall } from "../../../../components/Galleries";
import { FooterCrystal } from "../../../../components/Footer";
// import visImgs from "./visImgs.json";

// import "./style.css";

function VisDev() {
  // const state = {
  //   visImgs
  // };
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
              {/* {visImgs.map(img => (
                <ImgGall
                  key={index}
                  imgUrl={img.imgUrl}
                  alt ={img.alt}
                
                />
              ))} */}
            </div>
            <div className="columns is-full">
              <article>
                <h1>The Little Mermaid</h1>
                <p>
                  I read the Little Mermaid by Hans Cristian Anderson for the
                  first time a couple of years ago and I was very surprised when
                  I read it because in every version of the tale that I saw on
                  film it took place somewhere in Europe, or at least a fantasy
                  place inspired by Europe. However when I read the tale it did
                  not seem like a European setting. It felt eastern. Perhaps it
                  was just the translation from the version that I read, but the
                  fact that they would say palace instead of castle and temple
                  instead of church really had my thinking. I did a lot of
                  research on where it could have taken place and I saw the
                  illustrations that Edmund Dulac did for the tale which have
                  very heavy Eastern influence. I decided that I wanted to
                  redesign the story set in India. It is still a far off idea,
                  but I hope to be able to turn this into a full movie on day.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <FooterCrystal />
    </>
  );
}

export default VisDev;
