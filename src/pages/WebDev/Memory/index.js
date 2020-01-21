import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import { NavWeb } from "../../../components/Navigation";
import Contact from "../../../components/Contact";
import Nav from "../../../components/Nav";
// import "./style.css";

function Memory() {
  const state = {
    //tools used
    tools: "REACT, Bulma UI Framework, SASS",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/memory_game/",
    //link to LINKEDIN
    liveApp: "https://brittgalloway.github.io/memory_game/",
    //description of project
    description: ` This is a game created with Create React App.
      The objective is to click each image exactly once.
      Every click shuffles the images.
      Once you click all of the images you win the game! An alert will notify you of your victory
      If you lose, your highest score is recorded and the game continues as usual.`,
    //improvents for project
    improvements:
      "A modal pops up once the game is won with a relavent image and message."
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
                <h1 className="title">Memory Game</h1>
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

export default Memory;
