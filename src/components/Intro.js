import React from "react";

export const Intro = ({ value }) => {
  if (value === "loading") {
    return (
      <div>
        <h1></h1>
        <div className="border-bot"></div>
        <h2></h2>
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
