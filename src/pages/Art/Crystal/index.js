import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Nav from "../../../components/Nav";
import { NavCrystalArt } from "../../../components/Navigation";
import { FooterCrystal } from "../../../components/Footer";
import illustrateImg from "./illustrateImg.json";
// import "./style.css";

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
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <NavCrystalArt />
          <div id="galleryContain">
            <div className="columns is-multiline is-mobile">
              <div>
                <Gallery photos={illustrateImg} onClick={openLightbox} />
                <ModalGateway>
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
                </ModalGateway>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCrystal />
    </>
  );
}

export default Crystal;
