import React from "react";
import {
  Tools,
  ScreenCap,
  WhatIsIt,
  Improvements
} from "../../../components/Galleries";
import Contact from "../../../components/Contact";

// import "./style.scss";

function Tennis() {
  const state = {
    //tools used
    tools:
      "Express, Express-handlebars, Mongoose, Cheerio, Axios, SASS, Bulma UI Framework",
    //image of project
    imageUrl: "",
    alt: "",
    //link to GITHUB
    github: "https://github.com/brittgalloway/tennisNews",
    //link to LINKEDIN
    liveApp: "https://tennis-news11-24.herokuapp.com/",
    //description of project
    description:
      "This tennis new app is a full stack web page that scrapes articles from the offical ATP Tour website. You can view the Headline, Thumbnail Image, Category, and Orignal Post Date. Along side each article, you can post comments, and read previous comments. If you want, you can click the headline to read the actual article.", //improvents for project
    improvements: [
      "Users will be able to delete and edit comments.",
      "Articles are scraped daily to stay up-to-date.",
      "No duplicate articles.",
      "Reject articles with thumbnail links that break the image."
    ]
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
                <h1 className="title">Tennis News</h1>
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

export default Tennis;
