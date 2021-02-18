import React from "react";



const Skill = (props) => {
       return( props.skills.map((skill) => {
               return(<p className='one-skill'>{skill}</p>)
        }))
}



export default Skill;