import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
// import "./style.css";

function Project() {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <section className="hero is-medium is-primary is-bold">
              <div className="hero-body">
                <div className="container">
                  <h2 className="subtitle">Brittney Galloway</h2>
                  <h3 className="subtitle">Fullstack Developer</h3>
                  {/* <h1 className="title">{this.projectName}</h1> */}
                  <h1 className="title">projectName</h1>
                </div>
              </div>
            </section>
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child box">
                          <WhatIsIt />
                        </article>

                        <article className="tile is-child box">
                          <Improvements /> Improvements
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
                      Contact
                      <ul>
                        <li>Email: crlnfllr@gmail.com</li>
                        <li>GitHub: crlnfllr@gmail.com</li>
                        <li>LinkedIn: crlnfllr@gmail.com</li>
                      </ul>
                      <div className="box">
                        Tools
                        <br />
                        <Tools />
                      </div>
                    </article>
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

export default Project;
