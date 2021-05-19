import React from "react";

import { FooterSleepy } from "../../components/Footer";


function Links() {
  return (
    <>
 
        <div className="container padTop4">
        <h1 className="has-text-centered subtitle is-size-2">Sleepy Gallows Links</h1>
        <div >
        <ul className="has-text-centered padTop4">
            <li>
            <a className="is-size-4" href="https://sleepygallows.com">Offical Website</a>
            </li>
            <li>
            <a className="is-size-4" href="https://ko-fi.com/sleepygallows">Ko-fi</a>
            </li>
            <li>
            <a className="is-size-4" href="https://brittgalloway.github.io/SG_Blog/">Blog</a>
            </li>
            <li>
            <a className="is-size-4" href="https://brittgalloway.github.io/memory_game/">PLH Memory Game</a>
            </li>
            <li>
            <a className="is-size-4" href="https://www.patreon.com/2heroes">2Heroes Patreon</a>
            </li>
            <li>
            <a className="is-size-4" href="https://candyfluffs.com/?category=Necahual">2Heroes Necahual Merch</a>
            </li>
        </ul>
        </div>
      </div>
      <div className="padTop4"></div>
      < FooterSleepy />
    </>
  );
}

export default Links;
