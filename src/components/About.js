import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
//Home
//About
//Resume

const About = () => {
    return(
        <div id="about">
            <h4>Dallen Atchley</h4>
            <h5>Full Stack Software Engineer</h5>
            <p>Hi, My name is Dallen Atchley</p>
            <p>Connect with me via the links below</p>
            <a href="https://www.instagram.com/dallenatchley/">
            <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://www.linkedin.com/in/dallen-atchley-88818516a/"><LinkedInIcon></LinkedInIcon></a>
            <a href="https://github.com/jda10"><GitHubIcon></GitHubIcon></a>
        </div>
        
    );
}


export default About;