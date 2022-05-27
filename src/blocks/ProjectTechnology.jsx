import React from "react";
import "./Project.css";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillApi } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

const ProjectTechnology = ({ technologies }) => {
  const isCsharp = technologies.toUpperCase().includes("C#");
  const isJS =
    technologies.toUpperCase().includes("JAVASCRIPT") ||
    technologies.toUpperCase().includes("JS");

  const isDB =
    technologies.toUpperCase().includes("SQL") ||
    technologies.toUpperCase().includes("DATABASE");

  const isGoogle =
    technologies.toUpperCase().includes("GOOGLE") ||
    technologies.toUpperCase().includes("GOOGLE API");

  const isBS = technologies.toUpperCase().includes("BOOTSTRAP");

  const isPayment =
    technologies.toUpperCase().includes("PAYFAST") ||
    technologies.toUpperCase().includes("PAYMENT");

  const isAPI =
    technologies.toUpperCase().includes("API") ||
    technologies.toUpperCase().includes("RESTFUL API");

  return (
    <div className="project-technologies">
      {isCsharp ? (
        <div className="technology-item">
          <SiCsharp />
        </div>
      ) : null}

      {isJS ? (
        <div className="technology-item">
          <IoLogoJavascript />
        </div>
      ) : null}

      {isDB ? (
        <div className="technology-item">
          <FaDatabase />
        </div>
      ) : null}

      {isGoogle ? (
        <div className="technology-item">
          <AiFillGoogleCircle />
        </div>
      ) : null}

      {isBS ? (
        <div className="technology-item">
          <BsBootstrapFill />
        </div>
      ) : null}

      {isPayment ? (
        <div className="technology-item">
          <MdPayment />
        </div>
      ) : null}

      {isAPI ? (
        <div className="technology-item">
          <AiFillApi />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectTechnology;
