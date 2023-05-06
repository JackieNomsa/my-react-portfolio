import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Skill from "./Skill";
import data from "./skills_data";
import my_projects from "./project_data";
import createProject from "./Project";
import About from "./About";
import Contact from "./Contact";
import { FaCogs } from "react-icons/fa";
import { BsCodeSlash } from 'react-icons/bs';

function App() {
  return (
    <>
      <Home />
      <About />
      <div className="section-one">
        <h1 className="heading" id="skills">
          Skills
        </h1>
        <div className="my-skills">
          <div className="my-icon">
            <FaCogs />
          </div>
          <div className="total_skills">
            <Skill skills={data} />
          </div>
        </div>
      </div>
      <div className="myDiv" id="projects">
        <h1 className="heading">Projects</h1>
        <div className="cards-section">{my_projects.map(createProject)}</div>
        <a href="https://github.com/JackieNomsa" className="view-more">View More Work <BsCodeSlash/></a>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
