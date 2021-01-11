import React from "react";
// import { NavComic, NavBurComic } from "../../components/NavComic";
import { Nav, NavBur} from "../../components/Nav";
import { Footer2hero } from "../../components/Footer";
import "./style.scss";

function Comics() {
  return (
    <>
      <div id="comic">
        <div className="columns is-gapless">
          <div className="column is-fixed is-3">
            <Nav />
          </div>
          <div className="column">
            <NavBur />
            <div className="columns">
              <div >
                <div className="column is-8 is-offset-3 is-full-mobile is-full-tablet">
                  <div id="comicContain" className="padTop4">
                    <article>
                      <h1 className="has-text-centered subtitle is-size-2">
                        2Heroes
                      </h1>
                        <div className="columns">
                          <div className="column ">
                            <p className="is-size-4">
                              Come join us on our first journey with Necahual,
                              Quetzalli, and Anacoana as they discover their
                              destiny and help save their people.
                            </p>
                            <p className="is-size-4 ">
                              NECAHUAL is a new and refreshing take on the
                              magical trope that also honors Meso-American
                              cultures.
                            </p>
                            <p className="is-size-4 ">
                              Subscribe to the
                              <a
                                className="candyFluff"
                                href="https://www.webtoons.com/en/challenge/necahual/a-peaceful-day/viewer?title_no=216820&episode_no=1">
                                WEBTOON
                              </a>
                              and never miss an update!
                            </p>
                          </div>
                          
                          </div>
                          <div className="columns padTop3"> 
                          <div className="column is-one-thirds text-box2">
                            <p className="is-size-3 has-text-centered ">
                              Find Us On
                            </p>
                            <hr className="hr" />
                            <ul className="is-size-4 has-text-centered ">
                              <li >
                                <a
                                  className="candyFluff"
                                  href="https://www.instagram.com/2.heroes/"
                                >
                                  <i className="fab fa-instagram "></i>
                                  Instagram
                                </a>
                              </li>
                              <li >
                                <a
                                  className="candyFluff"
                                  href="https://twitter.com/2Heroes1"
                                >
                                  <i className="fab fa-twitter-square"></i>
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
                        <div className="column is-two-thirds ">
                        <img className="necaImg"
                              src={
                                process.env.PUBLIC_URL + "/images/necahualImg.jpg"
                              }
                              alt="Necahual, Quetzalli, and Anacoana transform for the first time."
                            />
                          </div>
                          </div>

                    </article>
                    <section className="padTop4">
                    <div className="columns">
                      <div className="column has-text-centered">
                        <h2 className="is-size-4">Already a fan?</h2>
                        <p className="is-size-4">Find stickers, buttons, charms, and prints at   <a
                          className="candyFluff"
                          href="https://candyfluffs.com/?category=Necahual"
                        >
                          CandyFluffs.com
                        </a>
                        </p>
                      </div>
                      </div>
                      <div className="columns padTop3">
                        <div className="column is-one-thirds">
                        <img
                              src={
                                process.env.PUBLIC_URL + "/images/NecaCharms.jpg"
                              }
                              alt="Necahual, Quetzalli, and Anacoana Charms availible for sale."
                            />
                         
                        </div>
                        <div className="column is-one-thirds">
                        <img
                              src={
                                process.env.PUBLIC_URL + "/images/neca_mini_comics.jpg"
                              }
                              alt="A collection of mini comics first availible on the 2Heros Patreon."
                            />
                         
                        </div>
                        <div className="column is-one-thirds">
                        <img
                              src={
                                process.env.PUBLIC_URL + "/images/necastickers.jpg"
                              }
                              alt="Necahual, Quetzalli, and Anacoana stickers availible for sale."
                            />
                         
                        </div>
                      </div>
                 
                    </section>
                    <article className="shadow">
                      <h1 className="title is-1 has-text-centered padTop">
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
                      <div className="padTop">
                        <p className="is-size-4 ">
                          Serigio (the writer) and Crystal (the artist) met at a
                          networking session at C2E2 in Chicago 2017. They
                          became fast friends and have been working together
                          ever since.
                        </p>
                      </div>
                    </article>
                   
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
