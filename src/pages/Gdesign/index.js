import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavBur } from "../../components/Nav";
import {Contact}  from "../../components/About";




function WebDev() {
 
  return (
    <>
      <div className="columns back_ground">
        <div className="column is-fixed is-3">
          <Nav />
        </div>
        <div className="column is-8 is-offset-3">
          <div className="columns ">
            <div className="column is-11 ">
              <NavBur />
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title has-text-primary has-text-centered">
                      Graphic Design
                    </h1>
                  </div>
                </div>
              </section>
              <div className="columns">
                <div className="column">
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                      <div className="tile is-parent ">
                        <div className="tile is-parent is-vertical">
                          <Link to="#">
                            <article className="tile is-child box">
                              <div id="sg">
                                <div className="titles">Our Logo!</div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/pageheade_rmain_logo.jpg"
                                  }
                                  alt="sleepy gallows cover"
                                />
                              </div>
                            </article>
                          </Link>
                          <Link to="#">
                            <article className=" tile is-child box">
                              <div id="swaddle">
                                <div className="titles">
                                  Buzzin Cuzzin
                                </div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/swaddles.jpg"
                                  }
                                  alt="swaddles for waddles cover"
                                />
                              </div>
                            </article>
                          </Link>
                          <Link to="#">
                            <article className="tile is-child box">
                              <div id="memory">
                                <div className="titles">Delish and Dior</div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/memory.jpg"
                                  }
                                  alt="Memory game cover"
                                />
                              </div>
                            </article>
                          </Link>
                        </div>
                        <div className="tile is-parent is-vertical">
                          <Link to="#">
                            <article className="tile is-child box">
                              <div id="spaceChasers">
                                <div className="titles">TLC Bath</div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/aurora-borealis-5.jpg"
                                  }
                                  alt="space chasers cover"
                                />
                              </div>
                            </article>
                          </Link>
                          <Link to="#">
                            <article className=" tile is-child box">
                              <div id="swiftly">
                                <div className="titles">Candyfluffs.com</div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/swiftly.jpg"
                                  }
                                  alt="Swiftly cover"
                                />
                              </div>
                            </article>
                          </Link>
                        
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDev;
