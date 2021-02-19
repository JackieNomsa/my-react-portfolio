import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
function Nav(props) {
  return (
    <>
      <div className="nav-one">
        <a href="#">
          <attr title="CONTACT ME">
            <HiOutlineMail />
          </attr>
        </a>
        <a href="https://github.com/JackieNomsa">
          <attr title="GitHub profile">
            <IoLogoGithub />
          </attr>
        </a>
        <a href="#">
          <attr title="LinkedIn profile">
            <IoLogoLinkedin />
          </attr>
        </a>
        <a href="#">
          <attr title="View CV">
            <FaRegFilePdf />
          </attr>
        </a>
      </div>
      <div className="nav-two">
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
    </>
  );
}
export default Nav;
