import React from "react";

function Nav(props) {
  return (
    <>
      <div className="nav-one">
        <a href="https://github.com/JackieNomsa">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fas fa-file-pdf"></i>
        </a>
      </div>
      <div className="nav-two">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </>
  );
}
export default Nav;
