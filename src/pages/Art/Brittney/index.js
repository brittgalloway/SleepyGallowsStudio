import React, { useState, useCallback } from "react";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { Nav, NavBur } from "../../../components/Nav";
import { NavBrittneyArt } from "../../../components/Navigation";
import { FooterBrittney } from "../../../components/Footer";
import Gallery from "react-photo-gallery";
import sketchImg from "./sketchImg.json";

// import "./style.scss";

function Brittney() {
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
          <NavBur />
              <div className="column is-four-fifth">
                <NavBrittneyArt />
                <div id="galleryContain">
                  <div className="columns is-multiline is-mobile">
                    <div>
                      <Gallery photos={sketchImg} onClick={openLightbox} />
                      {/* <ModalGateway>
                        {viewerIsOpen ? (
                          <Modal onClose={closeLightbox}>
                            <Carousel
                              currentIndex={currentImage}
                              views={sketchImg.map(x => ({
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
          </div>
        </div>
      </div>
      <FooterBrittney />
    </>
  );
}

export default Brittney;
