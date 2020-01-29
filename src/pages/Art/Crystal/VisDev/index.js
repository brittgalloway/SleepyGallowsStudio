import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Nav from "../../../../components/Nav";
import { NavCrystalArt } from "../../../../components/Navigation";
import { FooterCrystal } from "../../../../components/Footer";
import charImg from "./charImg.json";
import visImg from "./visImg.json";

// import "./style.css";

function VisDev() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
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
              <div>
                <h1 className="subtitle">Character Design</h1>
                <Gallery photos={charImg} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={charImg.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
              <div>
                <h1 className="subtitle">Visual Design</h1>
                <Gallery photos={visImg} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={visImg.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
            </div>
          </div>
          <div className="columns is-full">
            <article>
              <h1 className="subtitle">The Little Mermaid</h1>
              <p>
                I read the Little Mermaid by Hans Cristian Anderson for the
                first time a couple of years ago and I was very surprised when I
                read it because in every version of the tale that I saw on film
                it took place somewhere in Europe, or at least a fantasy place
                inspired by Europe. However when I read the tale it did not seem
                like a European setting. It felt eastern. Perhaps it was just
                the translation from the version that I read, but the fact that
                they would say palace instead of castle and temple instead of
                church really had my thinking. I did a lot of research on where
                it could have taken place and I saw the illustrations that
                Edmund Dulac did for the tale which have very heavy Eastern
                influence. I decided that I wanted to redesign the story set in
                India. It is still a far off idea, but I hope to be able to turn
                this into a full movie on day.
              </p>
            </article>
          </div>
        </div>
      </div>

      <FooterCrystal />
    </>
  );
}

export default VisDev;
