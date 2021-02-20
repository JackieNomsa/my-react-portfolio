import React from "react";

function Para(props) {
  return (
    <p className="myPara about-animate" data-aos="fade-up-right">
      {props.info}
    </p>
  );
}

export default Para;
