import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Contact from "../../components/Contact";
import skills from "./skills.json";
import "./style.scss";

function WebDev() {
  const state = {
    skills
  };
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Nav />
        </div>
        <div className="column is-four-fifth">
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Brittney Galloway</h1>
                <h2 className="subtitle">Fullstack Developer</h2>
              </div>
            </div>
          </section>
          <div className="columns">
            <div className="column">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <Link to="/WebDev/sgs">
                        <article className=" is-child box">
                          <div id="sg">
                            <div className="titles">
                              Sleepy Gallows Studio
                              <br />
                              This website!
                            </div>
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/sg_logo.webp"
                              }
                              alt="sleepy gallows cover"
                            />
                          </div>
                        </article>
                      </Link>
                      <Link to="/WebDev/Swaddle">
                        <article className=" is-child box">
                          <div id="swaddle">
                            <div className="titles">Swaddles for Waddles</div>
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/soft_grad.gif"
                              }
                              alt="swaddles for waddles cover"
                            />
                          </div>
                        </article>
                      </Link>
                      <Link to="/WebDev/memory">
                        <article className=" is-child box">
                          <div id="memory">
                            <div className="titles">Memory Game</div>
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/soft_grad.gif"
                              }
                              alt="Memory game cover"
                            />
                          </div>
                        </article>
                      </Link>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <Link to="/WebDev/SpaceChase">
                        <article className=" is-child box">
                          <div id="spaceChasers">
                            <div className="titles">Space Chasers</div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/aurora-borealis-5.png"
                              }
                              alt="space chasers cover"
                            />
                          </div>
                        </article>
                      </Link>
                      <Link to="/WebDev/swiftly">
                        <article className=" is-child box">
                          <div id="swiftly">
                            <div className="titles">Swiftly</div>
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/soft_grad.gif"
                              }
                              alt="Swiftly cover"
                            />
                          </div>
                        </article>
                      </Link>
                      <Link to="/WebDev/tennis">
                        <article className=" is-child box">
                          <div id="tennis">
                            <div className="titles">Tennis News</div>
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/soft_grad.gif"
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
                  <article className="tile is-child box has-text-centered">
                    <div className="box">
                      <p className="is-size-4">Skills</p>
                      <br />
                      <i className="fab fa-2x fa-html5"></i>
                      <i className="fab fa-2x fa-css3-alt"></i>
                      <i className="fab fa-2x fa-js"></i>
                      <i className="fab fa-2x fa-node-js"></i>
                      <i className="fab fa-2x fa-github"></i>
                      <i className="fab fa-2x fa-git-square"></i>
                      {state.skills.map((skill, index) => {
                        return (
                          <img
                            id="skillImage"
                            key={index}
                            src={skill.src}
                            alt="Skill Icons"
                          />
                        );
                      })}
                    </div>
                    <Contact />
                    <div id="skills" className="box">
                      <p className="is-size-4">About Me</p>
                      <img
                        src={process.env.PUBLIC_URL + "/images/me.jpg"}
                        alt="Brittney Galloway smiling"
                      />
                      <ul>
                        <li>Location: Greater Chicagoland Area</li>
                        <li>
                          Hobbies: Tennis, AfroPunk, all things animation, art,
                          &amp; video games
                        </li>
                        <li>
                          Web Developer with a background in animation and fine
                          arts. Certified in Full Stack Web Development from
                          Northwestern University, including JavaScript, CSS,
                          HTML, and responsive web design. Known for clean and
                          clear code as well as problem-solving abilities.
                          Passionate about creating a great user experience
                          through responsive, mobile friendly and intuitive
                          design and clear branding. My communication skills,
                          expanding technological skills, mixed with an artistic
                          background makes me a great addition to any web
                          development team.
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
    </>
  );
}

export default WebDev;
