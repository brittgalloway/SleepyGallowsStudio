import React from "react";
import { NavComic, NavBurComic } from "../../components/NavComic";
import { Footer2hero } from "../../components/Footer";
import "./style.scss";

function Comics() {
  return (
    <>
      <div id="comic">
        <div className="columns is-gapless">
          <div className="column is-fixed is-3">
            <NavBurComic />
            <NavComic />
          </div>
          <div className="column">
            <div className="columns backgroundComic ">
              <div className=" has-text-centered has-text-white">
                <div className="column is-8 is-offset-3 is-full-mobile is-full-tablet">
                  <div id="comicContain" className="padTop4">
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
                            <p className="is-size-4 has-text-centered shadow">
                              Come join us on our first journey with Necahual,
                              Quetzalli, and Anacoana as they discover their
                              destiny and help save their people.
                            </p>
                            <p className="is-size-4 has-text-centered shadow">
                              Necahual is a new and refreshing take on the
                              magical trope that also honors Meso-American
                              cultures.
                            </p>
                            <p className="is-size-4 shadow level">
                              Subcribe to the{" "}
                              <a
                                className="candyFluff"
                                href="https://www.webtoons.com/en/challenge/necahual/a-peaceful-day/viewer?title_no=216820&episode_no=1"
                              >
                                <img
                                  width="32"
                                  className=" webtoon shadow level "
                                  alt="Webtoon Logo"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/webtoonLogo.png"
                                  }
                                />
                                WEBTOON
                              </a>{" "}
                              and never miss an update!
                            </p>
                          </div>
                          <div className="column is-one-thirds text-box2">
                            <p className="is-size-3 has-text-centered shadow">
                              Find Us On
                            </p>
                            <hr className="hr" />
                            <ul className="is-size-4 has-text-centered shadow">
                              <li className="shadow">
                                <a
                                  className="candyFluff"
                                  href="https://www.instagram.com/2.heroes/"
                                >
                                  <i className="fab fa-instagram "></i>{" "}
                                  Instagram
                                </a>
                              </li>
                              <li className="shadow">
                                <a
                                  className="candyFluff"
                                  href="https://twitter.com/2Heroes1"
                                >
                                  <i className="fab fa-twitter-square"></i>{" "}
                                  Twitter
                                </a>
                              </li>
                              <li className="shadow">
                                <a
                                  className="candyFluff"
                                  href="https://www.patreon.com/2heroes"
                                >
                                  <i className="fab fa-patreon"></i> Patreon
                                </a>
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
                          <figure className="image  is-pulled-right">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/crystal1.png"
                              }
                              alt="Drawing of Crystal"
                              style={{ width: "350px" }}
                            />
                          </figure>
                        </div>
                        <div className="column">
                          <figure className="image ">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/sergio1.png"
                              }
                              alt="Drawing of Sergio"
                              style={{ width: "350px" }}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="text-box padTop">
                        <p className="is-size-4 ">
                          Serigio (the writer) and Crystal (the artist) met at a
                          networking session at C2E2 in Chicago 2017. They
                          became fast friends and have been working together
                          ever since.
                        </p>
                      </div>
                    </article>
                    <div className="merch pads">
                      <p className="is-size-3">Find Necahual Merch at </p>
                      <p className="is-size-1 ">
                        <a
                          className="candyFluff"
                          href="https://candyfluffs.com/?category=Necahual"
                        >
                          CandyFluffs.com
                        </a>
                      </p>
                    </div>
                  </div>
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
