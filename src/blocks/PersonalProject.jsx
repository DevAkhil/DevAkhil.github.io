import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import PortfolioList from "../elements/portfolio/PortfolioList.jsx";

const PersonalProject = () => {
  const [miniProjectData, setMiniProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="miniProject"]
{
  
          title,
          description,
          technologies,
          gitURL,
          liveURL,
          features,
          videoID,
        
          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
  
}`
      )
      .then((data) => setMiniProjectData(data))
      .catch(console.error);
  }, []);

  console.log(miniProjectData);
  return (
    <React.Fragment>
      {miniProjectData &&
        miniProjectData.map((value, index) => (
          <PortfolioList
            styevariation="text-center mt--40"
            column="col-lg-4 col-md-6 col-sm-6 col-12"
            item="6"
            index={index}
            value={value}
          />
        ))}
    </React.Fragment>
  );
};

export default PersonalProject;
