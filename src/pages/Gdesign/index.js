import React from "react";
import { Nav, NavBur } from "../../components/Nav";

import { DesignLink } from "../../components/Galleries";
import Logos from "./logos.json";



function GDesign() {
  const state = {
    Logos,
  };
  return (
    <>
      <div className="columns back_ground">
        <div className="column is-fixed is-3">
          <Nav />
        </div>
        <div className="column is-8 is-offset-3">
          <div className="columns ">
            <div className="column is-11 ">
              <NavBur />
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title has-text-primary has-text-centered">
                      Graphic &amp; Web Design
                    </h1>
                  </div>
                </div>
              </section>
            
              <div className="columns is-multiline is-mobile">
                        {state.Logos.map((img) => (
                          <DesignLink
                            route={img.route}
                            src={img.src}
                            alt={img.alt}
                          />
                        ))}
              </div>
                {/* <dl>
                  <dt>
                    <div className="box">
                      Sleepy Gallows
                      <dd>
                        This logo was created by both Brittney and Crystal Galloway. We wanted a logo that looked dreamy and could compare to the logos of larg animation studios. Here are a few sketches and variations.
                      </dd>
                    </div>
                  </dt>
                </dl> */}
           
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GDesign;
