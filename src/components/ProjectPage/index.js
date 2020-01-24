import React from "react";
import { Tools, ScreenCap, WhatIsIt, Improvements } from "../Galleries";
import { NavWeb } from "../Navigation";
import Contact from "../Contact";

// import "./style.css";

function ProjectPage({
  projectName,
  github,
  liveApp,
  description,
  imageUrl,
  alt,
  improvements,
  tools,
  extraName,
  extraLink,
  extraNote
}) {
  return (
    <>
      <div className="columns">
        <div className="column is-full">
          <section className="hero is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h2 className="subtitle">Brittney Galloway</h2>
                <h3 className="subtitle">Fullstack Developer</h3>
                <h1 className="title">{projectName}</h1>
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
                          github={github}
                          liveApp={liveApp}
                          extraName={extraName}
                          extraLink={extraLink}
                          description={description}
                          extraNote={extraNote}
                        />
                      </article>

                      <article className="tile is-child box">
                        <Improvements improvements={improvements} />
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
                      <Tools tools={tools} />
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

export default ProjectPage;
