import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import { NavWeb } from "../../../components/Navigation";
import Contact from "../../../components/Contact";

// import "./style.scss";

function SpaceChase() {
  const state = {
    //tools used
    tools: "HTML, CSS, Materialize, Leaflet, Firebase",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SpaceChasers",
    //link to LINKEDIN
    liveApp: "https://cecileanne.github.io/SpaceChasers/",
    //description of project
    description:
      "SPACE CHASERS is a web application that allows users in the USA to quickly know if they are able to find and view an Aurora. The user inputs a zip code and the app finds the the nearest registered Dark Sky Places via the International Dark-Sky Association (IDA).",
    //improvents for project
    improvements:
      " As of 10/5/2019 Leaflet was used to help us find coordinates, but the map doesn't have the functionality we were hoping for. For now, if you click on the marker on the map, you will be taken to Google Maps to get driving directions to the location. In the future the map on the page would show the route, and written driving instructions may populate somewhere on the page."
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
                <h1 className="title">Space Chasers</h1>
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
                        <li>
                          Demo:
                          https://cecileanne.github.io/SpaceChasers/index%20-%20demo.html
                        </li>
                        <small>
                          *Note: There are 2 deployed projects. The solar cycle
                          is low for the next few years and the live project
                          should tell you there is nothing to see in the USA.
                          The 2nd link has a lower threshold that allows the
                          user to get information for demonstration purposes.
                        </small>
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

export default SpaceChase;