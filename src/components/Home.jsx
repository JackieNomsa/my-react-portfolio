import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { BsCodeSlash, BsCode } from "react-icons/bs";

const Home = () => {
  const [value, setValue] = useState("loading");

  const myIntro = () => {
    if (value === "loading") {
      return (
        <div className="menu">
          <h1>
            <BsCode />
          </h1>
          <div className="border-bot"></div>
          <h1>
            <BsCodeSlash />
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <p className="my-name">Jackie Nomsa Dube</p>

          <p className="title">A Web Developer</p>
        </div>
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setValue("loaded");
    }, 4000);
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
