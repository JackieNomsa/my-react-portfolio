import React from "react";

function Project(props){
    return(   
        <div className='card'>
            <div className='card-container'>
                <div className='card-front'>
                    <img src={props.img}/>
                </div>
                <div className='card-back'> 
            <div className='card-b-info'>
            <h4>{props.title}</h4>
            <p className='myDesc'>{props.description}</p>
            {/* <a href={props.link} target="_blank">view code</a> */}
                <a href={props.link} target="_blank">view site</a>
            </div>
                </div>
            </div>
        </div>
    )
    }



function createProject(info){
    const { img, title, description, link } = info;
    return(
        <Project img={img} title={title} description={description} link={link}/>
    )
}

export default createProject;