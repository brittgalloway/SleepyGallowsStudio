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
        <div className="columns is-gapless is-multiline is-mobile">
          <div className="column is-full">
            <Link to="/Animation/webseries">
              Web Series
              <img
                alt="Webseries"
                src={process.env.PUBLIC_URL + "/images/webseries.png"}
              />
            </Link>
          </div>
          <div className="column is-full">
            <Link to="/Animation/clientwork">
              Client Work
              <img
                alt="Client Work"
                src={process.env.PUBLIC_URL + "/images/cleintWork.png"}
              />
            </Link>
          </div>
          <div className="column is-full">
            <Link to="/Animation/forfun">
              Fun Animations
              <img
                alt="Fun Animations"
                src={process.env.PUBLIC_URL + "/images/forFun.png"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SGProductions;
