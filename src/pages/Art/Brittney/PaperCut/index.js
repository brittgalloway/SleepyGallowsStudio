import React, { useState, useCallback } from "react";
// import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { Nav, NavBur } from "../../../../components/Nav";
import { NavBrittneyArt } from "../../../../components/Navigation";
import { FooterBrittney } from "../../../../components/Footer";
import paperImg from "./paperImg.json";


function PaperCut() {
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
                 
                    <div>
                      <Gallery photos={paperImg} direction = {"column"} />
                      {/* <ModalGateway>
                        {viewerIsOpen ? (
                          <Modal onClose={closeLightbox}>
                            <Carousel
                              currentIndex={currentImage}
                              views={paperImg.map(x => ({
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
      <FooterBrittney />
    </>
  );
}

export default PaperCut;
