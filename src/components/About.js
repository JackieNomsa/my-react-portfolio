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
      <h1 className="name about-animate">Hi There, I'm Jackie!</h1>
      <p className="my-passion about-animate" data-aos="fade-right">
        A Software Engineer
      </p>
      <div className="more-info about-animate">
        <div>
        

          <Para info="Jackie is currently a second year student at WeThinkCode_,Currently working on Server Socket programming. She is skilled and both front-end and back-end development she also was a freelance web developer before joining WeThinkCode_ and still is . She can build applications in Java, Python and JavaScript." />
          <Para info="She is looking to improve the skills she currently has in order to pursue a successful career as a Pen Tester (perform simulated cyberattacks on a company's computer systems and networks) in order to make the internet and technology in general a safe space for generations to come." />
        </div>
        <Image />
      </div>
    </div>
  );
};

export default About;
