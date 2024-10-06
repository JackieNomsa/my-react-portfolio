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
      <div className="more-info about-animate">
      <Image />
        <div className="paragraphs">
          <Para info="I am an experienced software engineer with a solid foundation from WeThinkCode_, where I developed expertise in areas such as acceptance testing, code refactoring, SQL, Docker, and API creation. My technical proficiency spans Java, SpringBoot, Angular, PostgreSQL, and Jenkins, further enhanced by hands-on experience as a full-stack developer at one of South Africa’s largest banks. Additionally, I have contributed to engineering projects with Microsoft Apps and undertaken freelance work in web development, database management, and mobile apps." />
          <Para info="In my current role as a Graduate Software Engineer at Entersekt, I work on back-end applications using Java, Golang, Docker, and Kubernetes. Beyond professional duties, I am passionate about mentoring aspiring developers in Python, Java, and JavaScript, which has helped me refine my technical and communication skills. With a commitment to continuous learning, I look forward to applying my problem-solving abilities and evolving expertise in dynamic tech environments." />
        </div>
      </div>
    </div>
  );
};

export default About;
