import React from "react";
import {
  Tools,
  // ScreenCap,
  // WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import { NavWeb } from "../../../components/Navigation";
import Contact from "../../../components/Contact";
// import "./style.css";

function Sgs() {
  const state = {
    projectName: "Sleepy Gallows Studio",
    //tools used
    tools: "REACT, SASS, Bulma.io, Firebase",
    //image of project
    imageUrl: process.env.PUBLIC_URL + "/images/sg_screen.PNG",
    alt: "Sleepy Gallows Studio",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SleepyGallowsStudio",
    //description of project
    description:
      "Portfolio of the many projects of Brittney and Crystal Galloway",
    //improvents for project
    improvements: `This is the ultimate. Nothing can improve it. Just kidding, I would work on: mobile responsivness, and the design for the Comics page.`
  };
  return (
    <>
      <div className="columns">
        <div className="column back_ground is-full">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h2 className="title has-text-primary has-text-centered">
                  Brittney Galloway
                </h2>
                <h3 className="subtitle has-text-primary has-text-centered">
                  Fullstack Developer
                </h3>
                <h1 className="title has-text-primary has-text-centered">
                  Sleepy Gallows Studio
                </h1>
              </div>
            </div>
          </section>
          <NavWeb />
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="tile is-ancestor">
                <div className="tile is-vertical ">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child box">
                      <div className="box skills">
        <p>Portfolio of the many projects of Brittney and Crystal Galloway</p>
        <ul>
          <li>
            Github: <a href="https://github.com/brittgalloway/SleepyGallowsStudio">https://github.com/brittgalloway/SleepyGallowsStudio</a>
          </li>
          <li>
            Live App: <a href="/">Home</a>
          </li>
        
        </ul>
     
      </div>
                      </article>
                      <article className="tile is-child box">
                        <Improvements improvements={state.improvements} />
                      </article>
                   </div>
                   </div>
                  <article className="tile is-child box">
                    <div className="box skills">
                      Tools
                      <br />
                      <Tools tools={state.tools} />
                    </div>
                    <Contact />
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

export default Sgs;
