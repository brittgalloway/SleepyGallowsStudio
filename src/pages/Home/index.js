import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <>
      <div className="columns is-gapless is-multiline is-mobile">
        <div className="column is-half">
          <Link to="/Animation">
            <img
              alt="animation"
              src={process.env.PUBLIC_URL + "/images/Rectangle_1animation.png"}
            />
          </Link>
        </div>
        <div className="column is-half">
          <Link to="/Art">
            <img
              alt="Art"
              src={process.env.PUBLIC_URL + "/images/Rectangle_2art.png"}
            />
          </Link>
        </div>

        <div className="column is-half">
          <Link to="/Comics">
            <img
              alt="Comics"
              src={process.env.PUBLIC_URL + "/images/Rectangle_3Comics.png"}
            />
          </Link>
        </div>
        <div className="column is-half">
          <Link to="/WebDev">
            <img
              alt="WebDev"
              src={process.env.PUBLIC_URL + "/images/Rectangle_4web.png"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
