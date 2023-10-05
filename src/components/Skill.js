import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import skills_data from "./skills_data";

const Skill = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return skills_data.map((skill, index) => {
    return (
      <span key={index} className="one-skill">
        {skill}
      </span>
    );
  });
};

export default Skill;
