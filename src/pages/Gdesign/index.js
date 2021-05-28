import React from "react";
import { Nav, NavBur } from "../../components/Nav";

import { DesignLink } from "../../components/Galleries";


function GDesign() {
 
  return (
    <>
      <div className="columns back_ground">
        <div className="column is-fixed is-3">
          <Nav />
        </div>
        <div className="column is-8 is-offset-3">
          <div className="columns ">
            <div className="column is-12 ">
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
           
                {/* SG */}
                <div style={{ marginBottom:"30px"}}className="card column is-half is-offset-one-quarter">
                  <div className="card-image">
                    <figure className="image is-2by1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/gDesign/logoSG7Small.png"
                        }
                        alt="full sized Sleepy Gallows Studio logo with sleeping woman laying on the text"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div  className="content">
                    <p style={{ float:"left",width:"70%"}}>
                        This logo was created by both Brittney and Crystal
                        Galloway. We wanted a logo that looked dreamy and could
                        compare to the logos of larg animation studios. Here are
                        a few sketches and variations.
                      </p>
                      <span>
                      <img style={{ float:"right"}}className="image is-96x96"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/sg_logo.webp"
                        }
                        alt="Shortened Sleepy Gallows logo with only the letters SG"
                      />
                      <img style={{padding:"5px", width:"175px"}}
                        src={
                          process.env.PUBLIC_URL +
                          "/images/gDesign/SketchLogoSmall.jpg"
                        }
                        alt="Sleepy Gallows logo sketches"
                      />
                      <img style={{padding:"5px", width:"175px"}}
                        src={
                          process.env.PUBLIC_URL +
                          "/images/gDesign/sketchSmall.JPG"
                        }
                        alt="Sleepy Gallows logo sketches"
                      />
                      <img style={{padding:"5px", width:"175px"}}
                        src={
                          process.env.PUBLIC_URL +
                          "/images/gDesign/sketchSmall2.JPG"
                        }
                        alt="Sleepy Gallows logo sketches"
                      />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Sippin */}
                <div style={{ margin:"30px"}}className="card column is-one-quarter">
                  <div className="card-image">
                    <figure className="image ">
                      <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/gDesign/sippinTrippin_screen.png"
                    }
                    alt="A logo created for the podcast Sippin' and Trippin', a B-side Studio production"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                    <p>
                        A logo created for the podcast Sippin' &#38; Trippin', a
                        B-side Studio production. 
                        <br/> Made in Adobe Illustrator
                      </p>
                      <small>
                        Find it here:{" "}
                        <a href="https://youtu.be/jl8bXBgW0wE">YouTube</a>
                      </small>
                    </div>
                  </div>
                </div>
                {/* Delish */}
                <div style={{ margin:"30px"}}className="card column is-one-quarter">
                  <div className="card-image">
                    <figure className="image ">
                      <img
                   src={
                    process.env.PUBLIC_URL +
                    "/images/gDesign/delish1_screen.png"
                  }
                  alt="A logo created for the podcast Delish and Dior, a B-side Studio production"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                    <p>
                        This is a logo for the podcast: Delish &#38; Dior
                        created for B-side Studio.
                        <br/> Made in Adobe Illustrator
                      </p>
                      <small>
                        Find it here:{" "}
                        <a href="https://youtu.be/mbYg48Wn-tU">YouTube</a>
                      </small>
                    </div>
                  </div>
                </div>
                {/* buzzin */}
                <div style={{ margin:"30px"}}className="card column is-one-quarter">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/gDesign/buzzinCuzzin.png"
                        }
                        alt="A logo created for the podcast Buzzin' Cuzzins, a B-side Studio production"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p>
                        A logo created for the podcast Buzzin Cuzzins, a B-side
                        Studio production.
                        <br/> Made in Adobe Illustrator
                      </p>
                      <small>
                        Find it here:{" "}
                        <a href="https://www.youtube.com/watch?v=rx-_0RsV0PM">
                          YouTube
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                {/* Candy */}
                <div style={{ margin:"30px"}}className="card column is-one-quarter">
                  <div className="card-image">
                    <figure className="image is-5by3">
                      <img
                           src={
                            process.env.PUBLIC_URL +
                            "/images/gDesign/candyfluffHome.png"
                          }
                          alt="Screenshot of Candyfluffs home page."
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                    <p>
                        This is a SquarSpace website to sell art and Merchandise
                        by the artist Crystal Galloway. Visit the website:{" "}
                        <a href="https://candyfluffs.com/">Candyfluffs.com</a>
                        </p>
                    </div>
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

export default GDesign;
