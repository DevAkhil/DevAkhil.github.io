import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Project from "../blocks/Project";
import ProjectList from "../blocks/ProjectList";
import PersonalProject from "../blocks/PersonalProject";
import GraphicList from "../blocks/GraphicList";
import Graphic from "../blocks/Graphic";
import ContactForm from "../elements/contact/ContactForm";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];
const PortfolioLanding = () => {
  let title = "About Me",
    description =
      "Passionate self-driven software developer committed to the philosophy of life-long learning with experience in developing commercial full-stack web applications that have proven to increase business productivity and solve business problems.";
  const PostList = BlogContent.slice(0, 3);
  return (
    <div className="active-dark">
      <Helmet pageTitle="Akhil Ishwarlaal Portfolio" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title">
                        Hi, I’m <br />
                        Akhil Ishwarlaal
                        <br />
                        <TextLoop>
                          <span> C# Developer.</span>
                          <span> JS Developer</span>
                          <span> React Developer</span>
                        </TextLoop>{" "}
                      </h1>

                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/image.png"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                    <div className="cv" style={{ paddingTop: "1rem" }}>
                      <a
                        href="/assets/CV/AiCV.pdf"
                        class="rn-button-style--2 btn-solid"
                        target="_blank"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}

      <div id="portfolio" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Portfolio</h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ProjectList />

                {/* <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="mini" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">Mini Projects</h2>
                    <p>
                      Projects developed in my free-time to solve problems that
                      have faced and to learn and develop my skill.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PersonalProject />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="https://github.com/DevAkhil"
                    >
                      <span>My Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id="graphic" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Graphic Design</h2>
                  <p>
                    Portfolio of my graphic design work that I have completed
                    for clients utilizing Photoshop.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              <GraphicList />

              {/* {PostList.map((value, i) => (
               
              ))} */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/image.png"
            contactTitle="Contct Me."
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
