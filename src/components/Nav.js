import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { DiDebian } from "react-icons/di";

function Nav() {
  const [navWidth, setNavWidth] = useState(false);

  const toggleNav = () => {
    setNavWidth(!navWidth);
  };
  window.onscroll = () => setNavWidth(false);

  return (
    <>
      <div className="top-buttons">
        <span className="menu-small-btn" onClick={toggleNav}>
          <BiMenuAltRight />
        </span>
        <span className="my-icon-sm">
          <DiDebian />
        </span>
        
      </div>

      <div>
        <div
          className={navWidth ? "small-links active" : "small-links"}
          id="my-mb-nav">
          <button className="closebtn" onClick={toggleNav}>
            <CgClose />
          </button>

          <a href="#home" onClick={toggleNav}>
            home
          </a>
          <a href="#about" onClick={toggleNav}>
            about
          </a>
          <a href="#skills" onClick={toggleNav}>
            skills
          </a>
          <a className="proj" href="#projects" onClick={toggleNav}>
            projects
          </a>
          <a href="#contact" onClick={toggleNav}>
            contact
          </a>
        </div>

        
      </div>

      <div className="large-nav">
        <div className="nav-one">
          <a href="#home">
            <IoHome />
          </a>
          <a href="#about">
            <SiAboutdotme />
          </a>
          <a href="#skills">
            <GiSkills />
          </a>
          <a className="proj" href="#projects">
            <GrProjects />
          </a>
        </div>
        
      </div>
    </>
  );
}

export default Nav;
