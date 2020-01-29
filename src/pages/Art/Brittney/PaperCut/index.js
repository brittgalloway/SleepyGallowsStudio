import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Nav from "../../../../components/Nav";
import { NavBrittneyArt } from "../../../../components/Navigation";
import { FooterBrittney } from "../../../../components/Footer";
import paperImg from "./paperImg.json";

// import "./style.scss";

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
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavBrittneyArt />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              <div>
                <Gallery photos={paperImg} onClick={openLightbox} />
                <ModalGateway>
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
                </ModalGateway>
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
