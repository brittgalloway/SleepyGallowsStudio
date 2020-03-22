import React from "react";
import ProjectPage from "../../../components/ProjectPage";

function Swaddle() {
  const state = {
    projectName: "Swaddle for Waddles",
    //tools used
    tools:
      "REACT, Material UI, NodeJs, Express, Sequelize, MySQL, Jimp, Base64, Passport.js",
    //image of project
    imageUrl: "/images/swaddlewaddle.PNG",
    alt: "App screenshot",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SwaddlesForWaddles",
    //link to LINKEDIN
    liveApp: "https://peaceful-wildwood-68341.herokuapp.com/",
    //description of project
    description: `Swaddles for Waddles is a meme generator that was inspired by the response of environmentalists to oil spills near Australia in 2001 and 2014. In one of the first internet calls to action, sweaters were requested to "swaddle" effected penguins to keep them safe from ingesting oil while they groomed themselves.
    While that issue has long been solved, Swaddles for Waddles allows the conversation for oil spills, penguins, and fun community efforts to continue. Additionally, there is a (mock) page for donation pledges to help penguins via the World Wild Life Foundation. Login: USERNAME: guest@yahoo.com PASSWORD: guest`,
    improvements:
      "Gallery page for users that are signed in to view their memes.Create PWA version. Allow guest/anonymous donations"
  };
  return (
    <ProjectPage
      projectName={state.projectName}
      github={state.github}
      imageUrl={state.imageUrl}
      alt={state.alt}
      liveApp={state.liveApp}
      description={state.description}
      improvements={state.improvements}
      tools={state.tools}
    />
  );
}

export default Swaddle;
