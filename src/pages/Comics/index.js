import React from "react";
import NavComic from "../../components/NavComic";
import { Footer2hero } from "../../components/Footer";
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
            <div className="backgroundComic has-text-centered has-text-white">
              <div id="galleryContain">
                <article>
                  <h2 className="subtitle is-size-2 has-text-white padTop shadow">
                    2Heroes Presents
                  </h2>
                  <h1 className="title is-size-1 has-text-white padTop2 shadow">
                    Necahual
                  </h1>
                  <p className="is-size-4 has-text-justified shadow">
                    Come join us on our first journey with Necahual, Quetzalli,
                    and Anacoana as they discover their destiny and help save
                    their people.
                  </p>
                  <p className="is-size-4 has-text-justified shadow">
                    Necahual is a new and refreshing take on the magical trope
                    that also honors Meso-American cultures.
                  </p>
                  <p className="is-size-4 shadow">
                    SUBSCRIBE to the Webtoon and never miss an update!
                  </p>
                </article>
                <p id="findUs" className="is-size-4 has-text-centered shadow">
                  Find Us On:
                </p>
                <ul className="is-size-4 has-text-centered shadow">
                  <li className="shadow">
                    <figure className="image is-32x32 shadow">
                      <img
                        alt="Webtoon Logo"
                        src={process.env.PUBLIC_URL + "/images/webtoonLogo.png"}
                      />
                      Webtoon
                    </figure>
                  </li>
                  <li className="shadow">
                    <i class="fab fa-instagram "></i> Instagram
                  </li>
                  <li className="shadow">
                    <i class="fab fa-twitter-square"></i> Twitter
                  </li>
                  <li className="shadow">
                    <i class="fab fa-patreon"></i> Patreon
                  </li>
                </ul>
                <p className="is-size-4 shadow">
                  Buy Merch
                  <a href="https://candyfluffs.com/?category=Necahual">here</a>!
                </p>
                <article className="shadow">
                  <h1
                    id="2heroCreator"
                    className="title has-text-white padTop3"
                  >
                    The Creators
                  </h1>
                  <figure className="image">
                    <img
                      src={process.env.PUBLIC_URL + "/images/nothereyet"}
                      alt="Drawing of Serio and Crystal"
                    />
                  </figure>
                  <p id="2heroAbout" className="is-size-4">
                    Serigio (the writer) and Crystal (the artist) met at a
                    networking session at C2E2 in Chicago 2017. They became fast
                    friends and have been working together ever since.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2hero />
    </>
  );
}

export default Comics;
