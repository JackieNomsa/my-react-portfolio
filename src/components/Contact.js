import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    let form = document.getElementById("form");
    let text = document.getElementById("email-text");
    let my_email = document.getElementById("my_email").value;
    let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (my_email.match(emailPattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "your email is valid";
      text.style.color = "#66ff00";
      document.getElementById("submit").disabled = false;
    } else {
      form.classList.add("invalid");
      form.classList.remove("valid");
      text.innerHTML = "please enter a valid email";
      text.style.color = "red";
      document.getElementById("submit").disabled = true;
    }
    if (my_email === "") {
      form.classList.remove("invalid");
      form.classList.remove("valid");
      text.innerHTML = "";
    }
  };

  return (
    <>
      <div className="contact-form">
        <h1 className="heading" data-aos="fade-right" id="contact">
          Drop me a line
        </h1>
        <p>If you have any potential projects in mind or just to say 'Hi'. </p>

        <form action="https://formspree.io/f/maylgqjl" method="post" id="form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            data-aos="fade-up"
            id="my_email"
            onKeyUp={() => validateEmail()}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <span id="email-text"></span>

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
          <button className="submit-btn" id="submit">
            send <IoSend className="send-icon" />
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
