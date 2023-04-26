import React from "react";
import { RiArrowDownLine } from "react-icons/ri"

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

        <p className="title">A Software Developer</p>
        <span className="arrow"><RiArrowDownLine/></span>
      </div>
    );
  }
};
