import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import Contact from "../../../components/Contact";

// import "./style.scss";

function Swifly() {
  const state = {
    //tools used
    tools: "NodeJs, Express, Sequelize, MySQL, Bulma UI Framework, Handlebars",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/fashionapp",
    //link to LINKEDIN
    liveApp: "https://stormy-earth-44315.herokuapp.com/",
    //description of project
    description:
      "SWIFTLY is an app you can look through different images of shirts, pants, skirts, dresses, and shoes to create and save an outfit.",
    //improvents for project
    improvements: `Allow users to add images of their clothes or clothes they like to website.
      Allow users to create profiles and have both private and public outfits
      Allow comments to be made on individual clothing items and on outfits
      Allow outfits to be deleted
      Allow user posted items (and comments) to be deleted`
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
                <h1 className="title">Swifly</h1>
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

export default Swifly;
