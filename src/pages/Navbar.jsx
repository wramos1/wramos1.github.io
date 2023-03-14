import React, { useEffect, useState } from 'react'
import Resume from '../CopyOfWillyamRamosResume.pdf';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);


    const hamburgerAppear = () => {
        document.querySelector('.hamburger').classList.toggle('appear');
        document.querySelector('.links').classList.toggle('appear');
    };

    const tabSelecting = () => {
        const tabs = document.getElementsByClassName('quick-link');
        if (window.innerWidth < 768) {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click', () => {
                    document.querySelector('.hamburger').classList.remove('appear');
                    document.querySelector('.links').classList.remove('appear');
                })
            };
        }
    };
    const responsiveNavColors = () => {
        if (window.innerWidth < 768) {
            document.querySelector('.navbar').classList.add('moving-nav');
            document.querySelector('.navbar').classList.remove('navbar-top');
            document.querySelector('.resume-link').classList.add('moving-resume-link');
            document.querySelector('.resume-link').classList.remove('resume-link-top');
        }
        else {
            document.querySelector('.navbar').classList.add('navbar-top');
            document.querySelector('.navbar').classList.remove('moving-nav');
            document.querySelector('.resume-link').classList.add('resume-link-top');
            document.querySelector('.resume-link').classList.remove('moving-resume-link');
        }
    }

    useEffect(() => {
        tabSelecting();
        responsiveNavColors();
        const moveNavbar = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 0) {
                setScrolled(true);
                document.querySelector('.navbar').classList.add('moving-nav');
                document.querySelector('.navbar').classList.remove('navbar-top');
                document.querySelector('.resume-link').classList.add('moving-resume-link');
                document.querySelector('.resume-link').classList.remove('resume-link-top');
            } else {
                setScrolled(false);
                document.querySelector('.navbar').classList.add('navbar-top');
                document.querySelector('.navbar').classList.remove('moving-nav');
                document.querySelector('.resume-link').classList.add('resume-link-top');
                document.querySelector('.resume-link').classList.remove('moving-resume-link');
            }
        };

        window.addEventListener("scroll", moveNavbar);
        window.addEventListener("resize", responsiveNavColors);
        window.addEventListener('resize', tabSelecting)

        return () => {
            window.removeEventListener("scroll", moveNavbar);
            window.removeEventListener("resize", responsiveNavColors);
            window.removeEventListener("resize", tabSelecting);
        }


    }, [scrolled]);

    return (
        <nav className='navbar navbar-top' >
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
                        <a className='resume-link resume-link-top' href={Resume} target='_blank' rel='noreferrer'>
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