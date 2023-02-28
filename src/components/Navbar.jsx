import React from 'react'

const Navbar = () => {
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
                        <a href="#work">
                            My Work
                        </a>
                    </li>

                    <li className='quick-link'>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>

                    <li className='resume-btn'>
                        <a href='resume'>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar