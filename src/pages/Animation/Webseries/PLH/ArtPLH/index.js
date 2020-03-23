import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { Nav, NavBur } from "../../../../../components/Nav";
import { NavAnimation, PLHnav } from "../../../../../components/Navigation";
import { FooterSleepy } from "../../../../../components/Footer";
import artOfPlhImg from "./artOfPlhImg.json";
// import "./style.scss";

function PHL() {
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
        <div className="column is-fixed is-3">
          <Nav />
          <NavBur />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-8 is-offset-3">
              <div className="column is-four-fifth">
                <NavAnimation />
                <PLHnav />
                <h1 className="title has-text-centered">
                  Art of FOR PEACE, LOVE, &amp; HARMONY
                </h1>
                <div id="galleryContain">
                  <div className="columns is-multiline is-mobile">
                    <Gallery photos={artOfPlhImg} onClick={openLightbox} />
                    <ModalGateway>
                      {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                          <Carousel
                            currentIndex={currentImage}
                            views={artOfPlhImg.map(x => ({
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
            </div>
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default PHL;
