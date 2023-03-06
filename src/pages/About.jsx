import React from 'react'

import { skills } from '../utils/Skills';
import '../styles/About.css';

const About = () => {
    return (
        <div id="aboutMe">
            <h1 className='section-title'>
                About Me
            </h1>

            <div className='about-contents'>
                <div className='summary-section'>
                    <h2 className="highlights">
                        Summary
                    </h2>
                    <p>
                        Hey! I’m Willyam and I’m a Front-End Developer
                        who is passionate about developing user interfaces
                        that are both compelling and accessible while also
                        maintaining the best practices when it comes to
                        writing code.

                        <br />
                        <br />

                        I pride myself on my willingness to learn as it
                        always helps me solve challenging problems.
                        Throughout <span className="highlights"> <a href="#myWork">my work</a></span>, I have had to exercise this
                        strength countless times in order to produce results.
                        Although I can work autonomously, I am more than
                        enthusiastic about collaborating with and impacting
                        teams so as to help them achieve better results.

                        <br />
                        <br />

                        Moreover, I am constantly looking for new ways to
                        expand my knowledge of all things web development and
                        am always fascinated by the ways in which technology
                        continues to improve. Feel free to <span className="highlights"><a href="#contactMe">contact me</a> </span> if you
                        have an opportunity that aligns with my expertise.
                    </p>

                    <a className='summary-section-btn' href='#contactMe'>
                        Contact Me
                    </a>
                </div>

                <div className='skills-section'>

                    <h2 className="highlights">
                        Skills
                    </h2>

                    <p>
                        My skill-set can be viewed here:
                    </p>

                    <ul className='skills-list'>
                        {skills.map((skill, i) => {
                            return <li key={i}>{skill}</li>
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About