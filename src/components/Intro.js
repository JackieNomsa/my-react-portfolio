import React from "react";

export const Intro = ({ value }) => {
  if (value === "loading") {
    return (
      <div>
        <div className="border-bot"></div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="my-name">Jackie Nomsa Dube</p>

        <p className="title">A Software Engineer</p>
      </div>
    );
  }
};
