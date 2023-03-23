import React from 'react'
import ProjectDiv from '../components/ProjectDiv';
import '../styles/Work.css'

import { otherProjects, topProjects } from '../utils/Projects';

const Work = () => {
    return (
        <div id='myWork'>
            <h1 className="section-title">
                My Work
            </h1>

            <div className='highlighted-projects'>
                {topProjects.map((project) => {
                    return (
                        <ProjectDiv
                            key={project.index}
                            project={project}
                        />
                    )
                })}
            </div>


            <h2 className='noteworthy-title'>
                Other Noteworthy Projects
            </h2>

            <div className="noteworthy-projects">
                {otherProjects.map((project, i) => {
                    return (
                        <div className="noteworthy-project" key={i}>
                            <div className='noteworthy-project-summary'>
                                <h1>{project.name}</h1>
                                <p className='noteworthy-project-summary-description'>{project.description}</p>
                                <p className='tech-stack'>Tech Stack: {project.stack.join(', ').toString()}</p>
                            </div>

                            <div className='noteworthy-project-btns'>
                                <a href={project.liveLink} target='_blank' rel='noreferrer'>
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    Visit
                                </a>
                                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                    <svg fill="none" stroke="currentColor" width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
                                    </svg>
                                    Code
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Work