import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import { NavWeb } from "../../../components/Navigation";

import Contact from "../../../components/Contact";

// import "./style.css";

function Sgs() {
  const state = {
    //tools used
    tools: "REACT, SASS, Bulma.io",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SleepyGallowsStudio",
    //link to LINKEDIN
    liveApp: "",
    //description of project
    description:
      "Portfolio of the many projects of Brittney and Crystal Galloway",
    //improvents for project
    improvements: "This is the ultimate. Nothing can improve it."
  };
  return (
    <>
      <div className="columns">
        <div className="column is-full">
          <section className="hero is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h2 className="subtitle">Brittney Galloway</h2>
                <h3 className="subtitle">Fullstack Developer</h3>
                <h1 className="title">Sleepy Gallows Studio (this website!)</h1>
              </div>
            </div>
          </section>
          <NavWeb />
          <div className="columns">
            <div className="column">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child box">
                        <WhatIsIt
                          github={state.github}
                          liveApp={state.liveApp}
                          description={state.description}
                        />
                      </article>

                      <article className="tile is-child box">
                        <Improvements improvements={state.improvements} />
                      </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child box">
                        <ScreenCap />
                        Image here
                      </article>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <Contact />
                    <div className="box">
                      Tools
                      <br />
                      <Tools tools={state.tools} />
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

export default Sgs;
