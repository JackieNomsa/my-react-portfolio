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
      <p key={index} className="one-skill" data-aos="fade-left">
        {skill}
      </p>
    );
  });
};

export default Skill;
