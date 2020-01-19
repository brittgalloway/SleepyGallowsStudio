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
                        <article className="tile is-child box">
                          Sleepy Gallows Studio
                          <br />
                          This website!
                        </article>
                        <article className="tile is-child box">
                          Swaddles for Waddles
                        </article>
                        <article className="tile is-child box">
                          Memory Game
                        </article>
                      </div>
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child box">
                          Space Chasers
                        </article>
                        <article className="tile is-child box">Swiftly</article>
                        <article className="tile is-child box">
                          Tennis News
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
                        Skills
                        <br />
                        <i className="fab fa-2x fa-html5"></i>
                        <i className="fab fa-2x fa-css3-alt"></i>
                        <i className="fab fa-2x fa-js"></i>
                        <i className="fab fa-2x fa-node-js"></i>
                        <i className="fab fa-2x fa-github"></i>
                        <i className="fab fa-2x fa-git-square"></i>
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
