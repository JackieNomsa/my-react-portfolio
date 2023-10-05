import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { DiDebian } from "react-icons/di";

const Home = () => {
  const [value, setValue] = useState("loading");

  const myIntro = () => {
    if (value === "loading") {
      return (
        <div className="menu">
          <div className="border-bot">
            <h1 className="code-tag">
              <DiDebian />
            </h1>
          </div>
        </div>
      );
    } else {
      return (
        <div id="home">
          <p className="my-name">Jackie N Dube</p>
          <span className="title">~~ website developer ~</span>
          <span className="title">~ mobile app developer ~</span>
          <span className="title">~ programming tutor ~~</span>
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
