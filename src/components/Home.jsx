import React, { useState } from "react";
import Intro from "./Intro";
import Contact from "./Contact";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <section className="intro section">
      <div className="my-intro" id="home">
        <Intro value={value} />
        <div className="v2"></div>
      </div>
    </section>
  );
};

export default Newhome;
