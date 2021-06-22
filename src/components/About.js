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
        A Web Developer
      </p>
      <div className="more-info about-animate">
        <div>
          <Para info="As a self taught developer with a number of years learning in the field, I can develop Apps, Sites, Games etc" />
          <Para info="With every Project I take on, I make sure to complete it on time, Stick to what the Client wants and give my opinion where it is needed. Take a look at my projects section and see some of the work I've done or am working on." />
        </div>
        <Image />
      </div>
    </div>
  );
};

export default About;
