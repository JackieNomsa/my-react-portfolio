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
      <h1 className="name about-animate">Hi, I am Jackie, nice to meet you</h1>
      {/* <p className="my-passion about-animate" data-aos="fade-right">
        A Software Engineer
      </p> */}
      <div className="more-info about-animate">
        <div className="paragraphs">
          <Para info="I am a full stack developer intern at absa where I enjoy challenges as they come, working on with Java, Springboot, angular and postgres , I completed my studies at WeThinkCode_ where I learnt
            how to write acceptance tests,
          Refactor existing code,
          Using CodeScene to understand my codebase and its health,
          Persistence with relational databases, SQL, JDBC,
          Build pipelines,
          Docker containers,
          Separation of Concerns and
          Building HTTP and Web APIs" />

          <Para info="I enjoy being challenged, I have learnt how to creatively solve problems,
           with each giving me an idea on how to solve our world's everyday problems using code, I know how to look at a problem and figure out a solution that is specific to it and can be integrated. I also enjoy reading code just to figure out how it can be broken,
           put together, and improved on or done differently." />

          <Para info="I am currently improving my full stack development skills but I also am interested DevOps, and cloud computing which will help me in pursuing a career in Cyber Security specifically Penetration testing in the near future."/>
        </div>
        <Image />
      </div>
    </div>
  );
};

export default About;
