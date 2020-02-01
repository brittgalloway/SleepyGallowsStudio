import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import "./style.scss";

function Art() {
  return (
    <div className="columns is-gapless">
      <div className="column is-narrow">
        <Nav />
      </div>
      <div className="column ">
        <div className="columns is-gapless">
          <div className="column is-half art">
            <Link to="/Art/Crystal">
              <div id="heightControl">
                <figure className="image ">
                  <div className="artTitles">Crystal's Art</div>

                  <img
                    alt="Man, Woman, and Baby"
                    src={process.env.PUBLIC_URL + "/images/crystal'sArt.svg"}
                  />
                </figure>
              </div>
            </Link>
          </div>
          <div className="column is-half">
            <Link to="/Art/Brittney">
              <div id="heightControl">
                <figure className="image ">
                  <div className="artTitles">Brittney's Art</div>
                  <img
                    alt="Woman in headwrap"
                    src={process.env.PUBLIC_URL + "/images/brittney'sArt.svg"}
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

export default Art;
