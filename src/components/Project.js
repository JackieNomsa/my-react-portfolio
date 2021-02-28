import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ id, img, title, description, link }) => {
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
            {/* <a href={props.link} target="_blank">view code</a> */}
            <a href={link}>view code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const createProject = (info) => {
  const { img, title, description, link } = info;
  return (
    <Project img={img} title={title} description={description} link={link} />
  );
};

export default createProject;
