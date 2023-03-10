import React from 'react'
import Resume from '../CopyOfWillyamRamosResume.pdf';

const Navbar = () => {

    const hamburgerAppear = () => {
        document.querySelector('.hamburger').classList.toggle('appear');
        document.querySelector('.links').classList.toggle('appear');
    }

    return (
        <nav className='navbar' >
            <div>
                <h1 id='home'>
                    <a href="/">
                        WKR
                    </a>
                </h1>
            </div>

            <div className='links'>
                <ul className='quick-links'>
                    <li className='quick-link'>
                        <a href="#aboutMe">
                            About Me
                        </a>
                    </li>

                    <li className='quick-link'>
                        <a href="#myWork">
                            My Work
                        </a>
                    </li>

                    <li className='quick-link'>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>

                    <li className='resume-btn'>
                        <a href={Resume} target='_blank' rel='noreferrer'>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hamburger" onClick={hamburgerAppear}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav >
    )
}

export default Navbar