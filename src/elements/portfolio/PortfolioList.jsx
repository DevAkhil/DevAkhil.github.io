import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation, index } = this.props;
    const {
      title,
      description,
      technologies,
      gitURL,
      liveURL,
      features,
      videoID,
      mainImage,
    } = this.props.value;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        <div className={`${column}`} key={index}>
          <div className={`portfolio ${styevariation}`}>
            <div className="thumbnail-inner">
              <div
                className={`thumbnail`}
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.2), rgb(0, 0, 0)), url(" +
                    mainImage.asset.url +
                    ")",
                }}
              ></div>
              <div
                className={`bg-blr-image`}
                style={{ backgroundImage: "url(" + mainImage.asset.url + ")" }}
              ></div>
            </div>
            <div className="content">
              <div className="inner">
                <p>{technologies}</p>
                <h4>
                  <a href="/portfolio-details">{title}</a>
                </h4>

                <div className="portfolio-button">
                  {gitURL ? (
                    <a className="rn-btn" target="_blank" href={gitURL}>
                      Source Code
                    </a>
                  ) : null}

                  {gitURL ? (
                    <a className="rn-btn" target="_blank" href={liveURL}>
                      Live Demo
                    </a>
                  ) : null}

                  {videoID ? (
                    <a
                      className="rn-btn"
                      target="_blank"
                      href={`https://www.youtube.com/watch?v=${videoID}`}
                    >
                      Youtube Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <Link className="link-overlay" to="/portfolio-details"></Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PortfolioList;
