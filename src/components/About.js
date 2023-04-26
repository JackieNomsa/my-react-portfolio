import React, { useEffect } from "react";
import Para from "./Para";
import Image from "./Image";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about" id="about">
      <h1 className="heading">About</h1>
      <h1 className="name about-animate">Hi there, I am Jackie,</h1>
      {/* <p className="my-passion about-animate" data-aos="fade-right">
        A Software Engineer
      </p> */}
      <div className="more-info about-animate">
      <Image />
        <div className="paragraphs">
          <Para info="A Software Developer, Currently working as a full stack on projects using Java, Springboot, Angular and Postgres , I completed my studies at WeThinkCode_ where I obtained an NQF5 certificate in Systems Development." />
          <Para info="I enjoy being challenged, I have learnt how to creatively solve problems,
           with each problem giving me an idea on how to solve the next using code. I know how to look at a problem and figure out a solution that is specific to it and can be integrated. I also enjoy reading code just to figure out how it can be broken,
           put together, and improved on or done differently." />
          <Para info="I am currently improving my full stack development skills but I am also interested DevOps, and I am hoping to someday pursue a career in Cyber Security specifically Penetration testing."/>
        </div>
      </div>
    </div>
  );
};

export default About;
