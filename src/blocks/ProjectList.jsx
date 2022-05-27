import React, { useState, useEffect } from "react";
import Project from "./Project";
import sanityClient from "../client.js";

const ProjectList = () => {
  const [ProjectList, setProjectList] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
          title,
          description,
          technologies,
          hasVideo,
          videoID,
          gitURL,
          liveURL,
          features,
          

          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
      }`
      )
      .then((data) => setProjectList(data))
      .catch(console.error);
  }, []);
  console.log(ProjectList);
  return (
    <React.Fragment>
      {ProjectList &&
        ProjectList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
    </React.Fragment>
  );
};

export default ProjectList;
