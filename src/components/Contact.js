import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

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
          Say Hi,
        </h1>
        <p>If you have any potential projects in mind or just to say 'Hi'. </p>

        <div>
                <p><HiOutlineMail/> jackienomsa3@gmail.com</p>
                <p><FaWhatsapp/> 067 076 9436</p>
                <p><BiPhoneCall/> 067 076 9436</p>
            </div>
      </div>
    </>
  );
};
export default Contact;
