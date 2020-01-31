import React from "react";
import ProjectPage from "../../../components/ProjectPage";

// import "./style.css";

function Memory() {
  const state = {
    projectName: "Memory Game",
    //tools used
    tools: "REACT, Bulma UI Framework, SASS",
    //image of project
    imageUrl: process.env.PUBLIC_URL + "/images/memory1.PNG",
    alt: "Memory Game Screenshot",
    //link to GITHUB
    github: "https://github.com/brittgalloway/memory_game/",
    //link to LIVE APP
    liveApp: "https://brittgalloway.github.io/memory_game/",
    //description of project
    description: ` This is a game created with Create React App.
      The objective is to click each image exactly once.
      Every click shuffles the images.
      Once you click all of the images you win the game! An alert will notify you of your victory
      If you lose, your highest score is recorded and the game continues as usual.`,
    //improvents for project
    improvements:
      "A modal pops up once the game is won with a relavent image and message."
  };
  return (
    <ProjectPage
      projectName={state.projectName}
      github={state.github}
      liveApp={state.liveApp}
      imageUrl={state.imageUrl}
      alt={state.alt}
      description={state.description}
      improvements={state.improvements}
      tools={state.tools}
    />
  );
}

export default Memory;
