import React from "react";
import Nav from "../../components/Nav";
// import "./style.css";

function WebDev() {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <Nav />
          </div>
          <div className="column is-9">
            <section class="hero is-medium is-primary is-bold">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">Brittney Galloway</h1>
                  <h2 class="subtitle">Fullstack Developer</h2>
                </div>
              </div>
            </section>
            <div className="columns">
              <div className="column">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-8">
                    <div class="tile">
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                          Sleepy Gallows Studio
                          <br />
                          This website!
                        </article>
                        <article class="tile is-child box">
                          Swaddles for Waddles
                        </article>
                        <article class="tile is-child box">Memory Game</article>
                      </div>
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                          Space Chasers
                        </article>
                        <article class="tile is-child box">Swiftly</article>
                        <article class="tile is-child box">Tennis News</article>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      Contact
                      <ul>
                        <li>Email: crlnfllr@gmail.com</li>
                        <li>GitHub: crlnfllr@gmail.com</li>
                        <li>LinkedIn: crlnfllr@gmail.com</li>
                      </ul>
                      <div className="box">
                        Skills
                        <br />
                        <i class="fab fa-2x fa-html5"></i>
                        <i class="fab fa-2x fa-css3-alt"></i>
                        <i class="fab fa-2x fa-js"></i>
                        <i class="fab fa-2x fa-node-js"></i>
                        <i class="fab fa-2x fa-github"></i>
                        <i class="fab fa-2x fa-git-square"></i>
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

export default WebDev;
