import React from "react";
// import { DonateBtn } from "../Btn";
import { Link } from "react-router-dom";

export function AboutCreators() {
  return (
    <article>
      <h1 className="title has-text-centered">About the Creators</h1>
      <h3 className="subtitle has-text-centered">
        We are Sisters by blood in sister fields: Animation and
        Illustration!​​​​​​​
      </h3>
      <figure className="image">
        <img
          src={process.env.PUBLIC_URL + "/images/brit-mio.PNG"}
          alt="Crystal and Brittney"
        />
      </figure>
      <p className="has-text-justified indent">
        We were born and raised in the Chicagoland area and went to California
        College of the Arts (CCA) in the Bay Area. Brittney (right) got her BFA
        in Animation (2014) while Crystal (left) got her BFA in
        Illustration(2015). Now both sisters are back in Chicago making art.
      </p>
    </article>
  );
}

export function AboutSG() {
  return (
    <article>
      <h1 className="title has-text-centered">About the Sleepy Gallows</h1>
      <h3 className="subtitle has-text-centered">Hello dreamers!</h3>
      <p className="has-text-justified indent">
        We are spreading the beauty of human nature through whimsical, charming
        art inspired by cultures from around the world. We want you to see the
        magic of many cultures in the way only animation can. The Sleepy Gallows
        Studio makes shows and shorts to give children of color heroes that look
        like them. Heroes their people have had all along. And to do so in such
        a way that even adults will be captivated by how much magic is still on
        earth. We want to broaden what your idea of a fairytale can be.
      </p>
      <p className="has-text-justified indent">
        We live in realm of whimsy to bring Native American, African, African
        American, and Indian mythology, legends; and triumphs to western film
        and animation in ways we haven’t seen before. We love
        fairytales/mythology and legends that blur truth and fiction. To tell
        the untold stories of under represented people. To tell the stories of
        their gods and legends and victories. That is what the Sleepy Gallows
        will be known for.
      </p>
      <p className="has-text-justified indent">
        Join us in our first dream,{" "}
        <Link to="/Animation/originals/plh">
          For Peace, Love, and Harmony (PLH)
        </Link>
        , a 7 piece drama in the Magnolia Fairy Ring. Follow the lives of 3 poor
        fay-folk, Harmony; Love; and Tranquility, tangled in the chaos of the
        royal family.
      </p>
    </article>
  );
}
export function Contact() {
  return (
    <>
      <div className="box">
        <h1 className="title ">Contact Us!</h1>
        <h2 className="subtitle ">bg(at)sleepygallows.com</h2>
        <small>Please note, we are full for the rest of 2020.</small>
        {/* <DonateBtn /> */}
      </div>
    </>
  );
}
