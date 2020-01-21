import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import Contact from "../../../components/Contact";

// import "./style.scss";

function Swaddle() {
  const state = {
    //tools used
    tools:
      "REACT, NodeJs, Express, Sequelize, MySQL, Jimp, Base64, Passport.js",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SwaddlesForWaddles",
    //link to LINKEDIN
    liveApp: "https://peaceful-wildwood-68341.herokuapp.com/",
    //description of project
    description: `Swaddles for Waddles is a meme generator that was inspired the response of environmentalists to oil spills near Australia in 2001 and 2014. In one of the first internet calls to action, sweaters were requested to "swaddle" effected penguins to keep them safe from ingesting oil while they groomed themselves.
    While that issue has long been solved, Swaddles for Waddles allows the conversation for oil spills, penguins, and fun community efforts to continue. Additionally, there is a (mock) page for donation pledges to help penguins via the World Wild Life Foundation. Login: USERNAME: guest@yahoo.com PASSWORD: guest`,
    improvements:
      "Gallery page for users that are signed in to view their memes.Create PWA version. Allow guest/anonymous donations"
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
                <h1 className="title">Swaddle for Waddles</h1>
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

export default Swaddle;
