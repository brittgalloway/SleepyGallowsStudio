import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavBur } from "../../components/Nav";
import Contact from "../../components/Contact";


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
                      Brittney Galloway
                    </h1>
                    <h2 className="title has-text-primary has-text-centered">
                      Front-End Developer
                    </h2>
                  </div>
                </div>
              </section>
              <div className="columns">
                <div className="column">
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                      <div className="tile is-parent ">
                        <div className="tile is-parent is-vertical">
                          <Link to="/WebDev/sgs">
                            <article className="tile is-child box">
                              <div id="sg">
                                <div className="titles">This website!</div>
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
                          <Link to="/WebDev/Swaddle">
                            <article className=" tile is-child box">
                              <div id="swaddle">
                                <div className="titles">
                                  Swaddles for Waddles
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
                          <Link to="/WebDev/memory">
                            <article className="tile is-child box">
                              <div id="memory">
                                <div className="titles">Memory Game</div>
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
                          <Link to="/WebDev/SpaceChase">
                            <article className="tile is-child box">
                              <div id="spaceChasers">
                                <div className="titles">Space Chasers</div>
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
                          <Link to="/WebDev/swiftly">
                            <article className=" tile is-child box">
                              <div id="swiftly">
                                <div className="titles">Swiftly</div>
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
                          <Link to="/WebDev/tennis">
                            <article className="tile is-child box">
                              <div id="tennis">
                                <div className="titles">Tennis News</div>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/tennis.jpg"
                                  }
                                  alt="tennis news cover"
                                />
                              </div>
                            </article>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box ">
                        <div className="box skills">
                          <p className="is-size-4">Skills</p>
                          <br />
                          <i className="fab fa-2x fa-html5"></i>
                          <i className="fab fa-2x fa-css3-alt"></i>
                          <i className="fab fa-2x fa-js"></i>
                          <i className="fab fa-2x fa-node-js"></i>
                          <i className="fab fa-2x fa-github"></i>
                          <i className="fab fa-2x fa-git-square"></i>
                       
                        </div>
                        <Contact />
                        <div id="skills" className="box skills">
                          <p className="is-size-4">About Me</p>
                          <img
                            src={process.env.PUBLIC_URL + "/images/me.jpg"}
                            alt="Brittney Galloway smiling"
                          />
                          <ul>
                            <li>
                              <strong>Location: </strong>Greater Chicagoland
                              Area
                            </li>
                            <li>
                              <strong>Hobbies: </strong> Tennis, AfroPunk, all
                              things animation, art, &amp; video games
                            </li>
                            <li>
                              <strong>Web Developer </strong>with a background
                              in animation and fine arts. Certified in Full
                              Stack Web Development from Northwestern
                              University, including JavaScript, CSS, HTML, and
                              responsive web design. Known for clean and clear
                              code as well as problem-solving abilities.
                              Passionate about creating a great user experience
                              through responsive, mobile friendly and intuitive
                              design and clear branding. My communication
                              skills, expanding technological skills, mixed with
                              an artistic background makes me a great addition
                              to any web development team.
                            </li>
                          </ul>
                        </div>
                      </article>
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
