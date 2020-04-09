import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavBur } from "../../components/Nav";

import "./style.scss";

function SGProductions() {
  return (
    <div className="columns is-gapless">
      <div className="column is-narrow">
        <Nav />
      </div>
      <div className="column">
        <div className="columns is-gapless is-multiline  is-mobile">
        <NavBur />
          <div className="column is-full has-text-centered">
            <Link to="/Animation/originals/plh">
              <div id="webSeries">
                <figure className="image ">
                  <div className="animationTitles">Originals</div>
                  <img
                    alt="Webseries"
                    src={process.env.PUBLIC_URL + "/images/webseries2.jpg"}
                  />
                </figure>
              </div>
            </Link>
          </div>
          <div className="column is-full">
            <Link to="/Animation/clientwork">
              <div id="clientWork">
                <figure className="image ">
                  <div className="animationTitles">Client Work</div>
                  <img
                    alt="Client Work"
                    src={process.env.PUBLIC_URL + "/images/cleintWork.jpg"}
                  />
                </figure>
              </div>
            </Link>
          </div>
          <div className="column is-full">
            <Link to="/Animation/forfun">
              <div id="funAni">
                <figure className="image">
                  <div className="animationTitles">Fun Animations</div>
                  <img
                    alt="Fun Animations"
                    src={process.env.PUBLIC_URL + "/images/forFun.jpg"}
                  />
                </figure>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SGProductions;
