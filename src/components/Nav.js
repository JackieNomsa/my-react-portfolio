import React from "react";
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
  function closeNav() {
    document.getElementById("smallNav").style.width = "0";
  }
  function openNav() {
    document.getElementById("smallNav").style.width = "100%";
  }
  return (
    <>
      <div className="top-buttons">
        <span className="menu-small-btn" onClick={openNav}>
          <BiMenuAltRight />
        </span>
        <span className="my-icon-sm">
          <DiDebian />
        </span>
      </div>

      <div className="small-nav" id="smallNav">
        <div className="small-links">
          <button className="close-btn" onClick={() => closeNav()}>
            <CgClose />
          </button>
          <p className="clear"></p>
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
