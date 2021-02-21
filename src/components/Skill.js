import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return props.skills.map((skill) => {
    return (
      <p className="one-skill" data-aos="fade-left">
        {skill}
      </p>
    );
  });
};

export default Skill;
