import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Graphic from "./Graphic.jsx";

const GraphicList = () => {
  const [graphicData, setGraphicData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="graphic"]
{
  
            title,
            company,
            software,
        
          mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
  
}`
      )
      .then((data) => setGraphicData(data))
      .catch(console.error);
  }, []);

  console.log(graphicData);
  return (
    <React.Fragment>
      {graphicData &&
        graphicData.map((value, index) => (
          <Graphic key={index} value={value} />
        ))}
    </React.Fragment>
  );
};

export default GraphicList;
