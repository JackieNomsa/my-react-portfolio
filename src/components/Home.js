import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { BsCodeSlash, BsCode } from "react-icons/bs";

const Home = () => {
  const [value, setValue] = useState("loading");

  const myIntro = () => {
    if (value === "loading") {
      return (
        <div className="menu">
          <div className="border-bot">
            <h1 className="code-tag">....</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div id="home">
          <p className="my-name">Jackie Nomsa Dube</p>

          <p className="title">A Web Developer</p>
        </div>
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setValue("loaded");
    }, 3000);
  });
  return (
    <section className="intro section">
      <Nav />
      <div className="my-intro" id="home">
        {myIntro()}
      </div>
    </section>
  );
};

export default Home;
