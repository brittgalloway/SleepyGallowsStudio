import React from "react";
import NavComic from "../../components/NavComic";
import "./style.scss";

function Comics() {
  return (
    <>
      <div id="comic">
        <div className="columns is-gapless">
          <div className="column is-one-fifth">
            <NavComic />
          </div>
          <div className="column is-four-fifth">
            <div className="backgroundComic has-text-centered">
              <h1 className="title">2Heroes</h1>
              <h2 className="subtitle">1st comic:</h2>

              <p>
                Find us on:
                <li>Webtoon</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Patreon</li>
              </p>
              <article>
                <h1>The Creators</h1>
                <p>
                  Serigio (the writer) and Crystal (the artist) met at a
                  networking session at C2E2 in Chicago 2017. They became fast
                  friends and have been working together ever since.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comics;
