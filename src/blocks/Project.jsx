import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

import ProjectTechnology from "./ProjectTechnology";

const Project = ({
  title,
  description,
  videoID,
  mainImage,
  technologies,
  gitURL,
  liveURL,
  features,
  hasVideo,
}) => {
  return (
    <div className="project">
      <div className="project-header">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-line"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="project-showcase">
              {hasVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&playlist=${videoID}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : mainImage.asset.url ? (
                <img class="mainImage" src={mainImage.asset.url} alt="" />
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-features">
              <h4 className="project-feature-heading">Features</h4>
              <div className="project-feature-body">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="project-technologies-header">
                <div className="project-technologies-title">
                  <text>Technologies Used: </text>
                </div>
                <div className="project-technologies-used">{technologies}</div>
              </div>

              <ProjectTechnology technologies={technologies} />
            </div>
            <div className="col-lg-6">
              <div className="button-area">
                {gitURL ? (
                  <div className="btn">
                    <a
                      className="rn-btn text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={gitURL}
                    >
                      Source Code
                    </a>
                  </div>
                ) : null}

                {videoID ? (
                  <div className="btn">
                    <a
                      className="rn-btn text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.youtube.com/watch?v=${videoID}`}
                    >
                      Youtube Demo
                    </a>
                  </div>
                ) : null}

                {liveURL ? (
                  <div className="btn">
                    <a
                      className="rn-btn text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={liveURL}
                    >
                      Live Demo
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
