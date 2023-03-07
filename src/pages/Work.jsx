import React from 'react'
import ProjectDiv from '../components/ProjectDiv';
import '../styles/Work.css'

import { topProjects } from '../utils/Projects';

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
        </div>
    )
}

export default Work