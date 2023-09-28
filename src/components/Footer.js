import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";


function Footer(){
    return(
        <div className="my_footer">
            <div className="my-sm-links">
          <a href="https://github.com/JackieNomsa" target="_blank">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/jackie-nomsa-dube-390b66131" target="_blank">
            <IoLogoLinkedin />
          </a>
          <a href="https://wa.me/0670769436" target="_blank">
            <IoLogoWhatsapp />
          </a>
          <a href="mailto:jackienomsadube@gmail.com" target="_blank">
            <HiOutlineMail />
          </a>
        </div>
        <p>&copy; Copyright Reserved Jackie-Nomsa 2021
        </p>
        </div>
    )
}

export default Footer;