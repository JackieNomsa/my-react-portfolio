import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";



function Footer(){
    return(
        <div className="my_footer">
            <div>
                <p><HiOutlineMail/> jackienomsa3@gmail.com</p>
                <p><FaWhatsapp/> 067 076 9436</p>
                <p><BiPhoneCall/> 067 076 9436</p>
            </div>
            <div className="my-sm-links">
          <a href="https://github.com/JackieNomsa">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/jackie-nomsa-dube-390b66131">
            <IoLogoLinkedin />
          </a>
        </div>
        <p>&copy; Copyright Reserved Jackie-Nomsa 2021
        </p>
        </div>
    )
}

export default Footer;