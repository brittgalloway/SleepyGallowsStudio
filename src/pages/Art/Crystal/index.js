import React, { useState, useCallback } from "react";
// import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { Nav, NavBur } from "../../../components/Nav";
import { NavCrystalArt } from "../../../components/Navigation";
import { FooterCrystal } from "../../../components/Footer";
import illustrateImg from "./illustrateImg.json";

function Crystal() {
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
        </div>
        <div className="column">
          <div className="columns">
            <div className="column is-8 is-offset-3">
            <NavBur className="is-hidden-desktop" />
              <div className="column is-four-fifth">
                <NavCrystalArt />
                <div id="galleryContain">
                                     <div>
                      <Gallery photos={illustrateImg} direction = {"column"}  />
                      {/* <ModalGateway>
                        {viewerIsOpen ? (
                          <Modal onClose={closeLightbox}>
                            <Carousel
                              currentIndex={currentImage}
                              views={illustrateImg.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                              }))}
                            />
                          </Modal>
                        ) : null}
                      </ModalGateway> */}
                
                  </div>
                </div>
              </div>
            </div>
          </div>
      <FooterCrystal />
        </div>
      </div>
    </>
  );
}

export default Crystal;
