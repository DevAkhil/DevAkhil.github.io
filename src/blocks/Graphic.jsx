import React from "react";

const Graphic = ({ key, value }) => {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-6 col-12" key={key}>
        <div className="blog blog-style--1">
          <div className="thumbnail">
            <a href="/blog-details">
              <img
                className="w-100"
                src={`${value.mainImage.asset.url}`}
                alt="Blog Images"
              />
            </a>
          </div>
          <div className="content">
            <p className="blogtype">{value.company}</p>
            <h4 className="title">
              <a href="/blog-details">{value.title}</a>
            </h4>
            {/* <div className="blog-btn">
              <a className="rn-btn text-white" href="/blog-details">
                Read More
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Graphic;
