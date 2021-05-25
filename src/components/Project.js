import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ id, img, title, description, link, site_link }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="card" data-aos="fade-left" key={id}>
      <div className="card-container">
        <div className="card-front">
          <img src={img} alt="my app" />
        </div>
        <div className="card-back">
          <div className="card-b-info">
            <h4>{title}</h4>
            <p className="myDesc" data-aos>
              {description}
            </p>

            <a href={link} target="_blank" rel="noreferrer">
              view code
            </a>

            <a href={site_link} target="_blank" rel="noreferrer">
              view code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const createProject = (info) => {
  const { img, title, description, link, site_link } = info;
  return (
    <Project
      img={img}
      title={title}
      description={description}
      link={link}
      site_link={site_link}
    />
  );
};

export default createProject;
