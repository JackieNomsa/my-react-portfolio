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
      <h1 className="about-animate">Hi There, I'm Jackie!</h1>
      <p className="my-passion about-animate" data-aos="fade-right">
        A self taught Web Developer
      </p>
      <div className="more-info about-animate">
        <div>
          <Para info="As fun as my learning journey has been it has also been challenging, but that has not stopped or deferred me because i am passionate about computer programming." />
          <Para info="I would like to work in a stable and professional environment as this will allow me to utilize my skills and hopefully improve them significantly." />
        </div>
        <Image />
      </div>
    </div>
  );
};

export default About;
