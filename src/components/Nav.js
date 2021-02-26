import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
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

        <div className="my-sm-links">
          <a href="https://github.com/JackieNomsa">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/jackie-nomsa-dube-390b66131">
            <IoLogoLinkedin />
          </a>
          <a href="/docs/JackieNomsaDube2.0.pdf">
            <FaRegFilePdf />
          </a>
        </div>
      </div>

      <div className="large-nav">
        <div className="nav-one">
          <a href="#home">
            <attr title="HOME">
              <IoHome />
            </attr>
          </a>
          <a href="#about">
            <attr title="ABOUT ME">
              <SiAboutDotMe />
            </attr>
          </a>
          <a href="#skills">
            <attr title="MY SKILLS">
              <GiSkills />
            </attr>
          </a>
          <a className="proj" href="#projects">
            <attr title="VIEW PROJECTS">
              <GrProjects />
            </attr>
          </a>
        </div>
        <div className="nav-two">
          <a href="#contact">
            <attr title="CONTACT ME">
              <HiOutlineMail />
            </attr>
          </a>
          <a href="https://github.com/JackieNomsa">
            <attr title="GitHub profile">
              <IoLogoGithub />
            </attr>
          </a>
          <a href="https://www.linkedin.com/in/jackie-nomsa-dube-390b66131">
            <attr title="LinkedIn profile">
              <IoLogoLinkedin />
            </attr>
          </a>
          <a href="/docs/JackieNomsaDube2.0.pdf">
            <attr title="View CV">
              <FaRegFilePdf />
            </attr>
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
