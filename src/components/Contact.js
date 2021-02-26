import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const handleSubmit = (e) => {
    const emailRegex =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (emailRegex.test(email) && subject >= 3 && message >= 10) {
      console.log(email, subject, message);
    } else {
      console.log("invalid form");
      e.preventdefault();
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="contact-form">
        <h1 className="heading" data-aos="fade-right" id="contact">
          Get in touch
        </h1>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/maylgqjl"
          method="post">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            data-aos="fade-up"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            data-aos="fade-up"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
          <textarea
            placeholder="message"
            name="message"
            rows="10"
            data-aos="fade-up"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required></textarea>
          <button className="submit-btn" data-aos="fade-right">
            send <IoSend className="send-icon" />
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
