import React from "react";

function Para(props) {
  return (
    <>
    <p className="myPara about-animate" data-aos="fade-up-right">
      {props.info}
      {/* <ul>
        {props.points.map(function(point){
            return <li>{point}</li>;
          })}
        </ul>
      {props.points}  */}
    </p>
    </>
  );
}

export default Para;
