import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

import "./style.scss";

function SGProductions() {
  return (
    <div className="columns is-gapless">
      <div className="column is-one-fifth">
        <Nav />
      </div>
      <div className="column is-four-fifth">
        <div className="columns is-gapless is-multiline  is-mobile">
          <div className="column is-full has-text-centered">
            <Link to="/Animation/webseries/plh">
              <div id="webSeries">
                <figure className="image ">
                  <div className="animationTitles">Web Series</div>
                  <img
                    alt="Webseries"
                    src={process.env.PUBLIC_URL + "/images/webseries.png"}
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
                    src={process.env.PUBLIC_URL + "/images/cleintWork.png"}
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
                    src={process.env.PUBLIC_URL + "/images/forFun.png"}
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
