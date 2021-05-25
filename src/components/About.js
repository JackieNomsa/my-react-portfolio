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
        A self taught Web Developer
      </p>
      <div className="more-info about-animate">
        <div>
          <Para info="I am 27 years old female, the third child of a family of seven. I am passionate about Software Engineering and Cyber Security." />
          <Para info="I have both the skills of a frontend and a backend developer as well as working with databases. Have a look at my Github portfolio if you'd like to find out more about my work." />
        </div>
        <Image />
      </div>
    </div>
  );
};

export default About;
