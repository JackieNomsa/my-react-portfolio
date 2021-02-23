import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

const myWindow = window.screen.width;

function Nav() {
  if (myWindow < 1025) {
    return (
      <>
        <div className="small-nav">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a className="proj" href="#projects">
            projects
          </a>
          <a href="#contact">contact</a>
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
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}
export default Nav;
