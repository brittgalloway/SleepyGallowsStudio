import React from "react";
import ProjectPage from "../../../components/ProjectPage";

// import "./style.scss";

function Tennis() {
  const state = {
    projectName: "Candy Fluffs E-commerce",
    //tools used
    tools:
      "Gatsby, Dato-CMS, SnipCart, SASS, Flexbox, Figma",
    //image of project
    imageUrl: "/images/tennisApp.PNG",
    alt: "Tennis News App Screenshot",
    //link to GITHUB
    github: "https://github.com/daleinen7/candyfluffs",
    //link to LINKEDIN
    liveApp: "https://candyfluffs.netlify.app/book",
    figma: "https://www.figma.com/file/IndaqA3RP8qZew4yHcXYQI/candyFluffs?node-id=0%3A1",
    //description of project
    description:
      "This website is in development. This is an e-commerce website built on a JAMstack. A team of 3 helped bring this project so far. I, Brittney, am the lead designer. Doug Leinen is the lead developer; and Stephanie Rinhart is the lead layout and style developer. The live app is the most current deployd version, but is not currently complete",
    improvements: [
      "Working Shopping cart, misc style."
    ]
  };
  return (
    <ProjectPage
      projectName={state.projectName}
      github={state.github}
      liveApp={state.liveApp}
      figma={state.figma}
      imageUrl={state.imageUrl}
      alt={state.alt}
      description={state.description}
      improvements={state.improvements}
      tools={state.tools}
    />
  );
}

export default Tennis;
