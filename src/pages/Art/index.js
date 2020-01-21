import React from "react";
import Nav from "../../components/Nav";
// import "./style.css";

function Art() {
  return (
    <div className="columns is-gapless">
      <div className="column is-one-fifth">
        <Nav />
      </div>
      <div className="column is-four-fifth">
        <div className="columns is-gapless">
          <div className="column is-half">
            <figure className="image is-9x16">
              <img
                alt="Man, Woman, and Baby"
                src={process.env.PUBLIC_URL + "/images/crystal'sArt.svg"}
              />
            </figure>
          </div>
          <div className="column is-half">
            <figure className="image is-9x16">
              <img
                alt="Woman in headwrap"
                src={process.env.PUBLIC_URL + "/images/brittney'sArt.svg"}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
