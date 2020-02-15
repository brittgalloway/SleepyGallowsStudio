import React from "react";
import ProjectPage from "../../../components/ProjectPage";

// import "./style.scss";

function Swifly() {
  const state = {
    projectName: "Swiftly",
    //tools used

    tools: "NodeJs, Express, Sequelize, MySQL, Bulma UI Framework, Handlebars",
    //image of project
    imageUrl: "/images/swiftly.PNG",
    alt: "Swiftly App Screenshot",
    //link to GITHUB
    github: "https://github.com/brittgalloway/fashionapp",
    //link to LINKEDIN
    liveApp: "https://stormy-earth-44315.herokuapp.com/",
    //description of project
    description:
      "SWIFTLY is an app you can look through different images of shirts, pants, skirts, dresses, and shoes to create and save an outfit.",
    //improvents for project
    improvements: `Allow users to add images of their clothes or clothes they like to website.
      Allow users to create profiles and have both private and public outfits
      Allow comments to be made on individual clothing items and on outfits
      Allow outfits to be deleted
      Allow user posted items (and comments) to be deleted`
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

export default Swifly;
