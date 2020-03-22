import React from "react";
import ProjectPage from "../../../components/ProjectPage";

// import "./style.css";

function Sgs() {
  const state = {
    projectName: "Sleepy Gallows Studio",
    //tools used
    tools: "REACT, SASS, Bulma.io",
    //image of project
    imageUrl: process.env.PUBLIC_URL + "/images/sg_screen.PNG",
    alt: "Sleepy Gallows Studio",
    //link to GITHUB
    github: "https://github.com/brittgalloway/SleepyGallowsStudio",
    //link to LIVEAPP
    liveApp: "/",
    //description of project
    description:
      "Portfolio of the many projects of Brittney and Crystal Galloway",
    //improvents for project
    improvements: `This is the ultimate. Nothing can improve it. Just kidding, I would work on: mobile responsivness, and the design for the Comics page.`
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

export default Sgs;
