import React from "react";
import NavComic from "../../components/NavComic";
import { Footer2hero } from "../../components/Footer";
import "./style.scss";

function Comics() {
  return (
    <>
      <div id="comic">
        <div className="columns is-gapless">
          <div className="column is-narrow">
            <NavComic />
          </div>
          <div className="column">
            <div className="backgroundComic has-text-centered has-text-white">
              <div id="galleryContain">
                <article>
                  <h2 className="subtitle is-size-2 has-text-white padTop shadow">
                    2Heroes Presents
                  </h2>
                  <h1 className="necahual has-text-white padTop2 shadow">
                    Necahual
                  </h1>
                  <div className="text-box">
                    <div className="columns">
                      <div className="column is-two-thirds">
                        <p className="is-size-4 has-text-justified shadow">
                          Come join us on our first journey with Necahual,
                          Quetzalli, and Anacoana as they discover their destiny
                          and help save their people.
                        </p>
                        <p className="is-size-4 has-text-justified shadow">
                          Necahual is a new and refreshing take on the magical
                          trope that also honors Meso-American cultures.
                        </p>
                        <p className="is-size-4 shadow">
                          SUBSCRIBE to the Webtoon and never miss an update!
                        </p>
                      </div>
                      <div className="column is-one-thirds text-box2">
                        <p className="is-size-3 has-text-centered shadow">
                          Find Us On
                          <hr className="hr" />
                        </p>
                        <ul className="is-size-4 has-text-centered shadow">
                          <li className="shadow">
                            <figure className="image is-32x32 shadow">
                              <img
                                alt="Webtoon Logo"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/webtoonLogo.png"
                                }
                              />
                              Webtoon
                            </figure>
                          </li>
                          <li className="shadow">
                            <i className="fab fa-instagram "></i> Instagram
                          </li>
                          <li className="shadow">
                            <i className="fab fa-twitter-square"></i> Twitter
                          </li>
                          <li className="shadow">
                            <i className="fab fa-patreon"></i> Patreon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="shadow">
                  <h1 className="title is-1 has-text-white padTop3">
                    The Creators
                  </h1>
                  <div className="columns padTop3">
                    <div className="column">
                      <figure className="image is-128x128 is-pulled-right">
                        <img
                          src={process.env.PUBLIC_URL + "/images/crystal1.png"}
                          alt="Drawing of Crystal"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <figure className="image is-128x128">
                        <img
                          src={process.env.PUBLIC_URL + "/images/sergio1.png"}
                          alt="Drawing of Sergio"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="text-box padTop">
                    <p className="is-size-4 ">
                      Serigio (the writer) and Crystal (the artist) met at a
                      networking session at C2E2 in Chicago 2017. They became
                      fast friends and have been working together ever since.
                    </p>
                  </div>
                </article>
                <div className="merch padTop3">
                  <p className="is-size-3">Find Necahual Merch at </p>
                  <p className="is-size-1">
                    <a href="https://candyfluffs.com/?category=Necahual">
                      CandyFluffs.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2hero />
    </>
  );
}

export default Comics;
