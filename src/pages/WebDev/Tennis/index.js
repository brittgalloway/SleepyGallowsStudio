import React from "react";
import ProjectPage from "../../../components/ProjectPage";

// import "./style.scss";

function Tennis() {
  const state = {
    projectName: "Tennis News",
    //tools used
    tools:
      "Express, Express-handlebars, Mongoose, Cheerio, Axios, SASS, Bulma UI Framework",
    //image of project
    imageUrl: "/images/tennisApp.PNG",
    alt: "Tennis News App Screenshot",
    //link to GITHUB
    github: "https://github.com/brittgalloway/tennisNews",
    //link to LINKEDIN
    liveApp: "https://tennis-news11-24.herokuapp.com/",
    //description of project
    description:
      "This tennis new app is a full stack web page that scrapes articles from the offical ATP Tour website. You can view the Headline, Thumbnail Image, Category, and Orignal Post Date. Along side each article, you can post comments, and read previous comments. If you want, you can click the headline to read the actual article.", //improvents for project
    improvements: [
      "Users will be able to delete and edit comments.",
      "Articles are scraped daily to stay up-to-date.",
      "No duplicate articles.",
      "Reject articles with thumbnail links that break the image."
    ]
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

export default Tennis;
