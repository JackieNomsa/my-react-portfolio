import React from "react";



function Contact(props){
    function openNav() {
        document.getElementById("myContact").style.display = "block";
        document.querySelector('.openbtn').style.opacity="0";
      }
      
      function closeNav() {
        document.getElementById("myContact").style.display = "none";
        document.querySelector('.openbtn').style.opacity="1";
      }
    return(
    <>
        <div id="myContact" className="contact-form">
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}><i class="fa fa-close"></i></a>
            <form>
                <input type='email' placeholder='Enter your email'/>
                <input type='text' placeholder='Enter subject'/>
                <textarea placeholder='message'></textarea>
            </form>
        </div>
        <a href='javascript:void(0)' className='openbtn' onClick={openNav}><i class="fas fa-envelope-square"></i></a>  
    </>
    )
}
export default Contact;