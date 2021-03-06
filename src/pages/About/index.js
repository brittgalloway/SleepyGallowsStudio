import React from "react";
import { Nav, NavBur } from "../../components/Nav";
import { AboutSG, AboutCreators, Contact } from "../../components/About";
import { FooterSleepy } from "../../components/Footer";
import "./style.scss";

function About() {
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-fixed is-narrow">
          <Nav />
        </div>
        <div className="column">
          <div className="columns">
            <div
              id="nav"
              className=" column is-6 is-offset-3 counterFooter is-full-mobile is-full-tablet"
            >
              <NavBur />
              <div className="aboutsection">
                <AboutSG />
              </div>
              <div className="aboutsection">
                <AboutCreators />
              </div>
            </div>

            <div className="column is-3">
              <div className="aboutsection">
                <div className="contactSG">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSleepy />
    </>
  );
}

export default About;
