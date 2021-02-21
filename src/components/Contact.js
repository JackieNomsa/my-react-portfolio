import React, { useEffect } from "react";
import { IoSend } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="contact-form">
        <h1 className="heading" data-aos="fade-right" id='contact'>
          Get in touch
        </h1>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            data-aos="fade-up"
          />
          <input type="text" placeholder="Enter subject" data-aos="fade-up" />
          <textarea
            placeholder="message"
            rows="10"
            data-aos="fade-up"></textarea>
          <button className="submit-btn" data-aos="fade-right">
            send <IoSend className="send-icon" />
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
