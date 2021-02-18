import React from 'react';
import Para from './Para';
import Image from './Image';

const About = () => {
    return(
        <div className='about' id='about'>
            <h1 className='heading'>About</h1>
            <h1>Hi There, I'm Jackie!</h1>
            <p className='my-passion'>A self taught Web Developer</p>
            <div className='more-info'>
            <div>
            <Para info='As fun as my learning journey has been it has also been challenging, but that has not stopped or deferred me because i am passionate about computer programming.'/>
            <Para info='I would like to work in a stable and professional environment as this willallow me to utilize my skills and hopefully improve them significantly.'/>
            </div>
            <Image />
            </div>
            

        </div>
    )
}

export default About;