import React from 'react'

const ProjectDiv = ({ project }) => {
    return (
        <div className='project-preview-div'>
            <div className='project-preview-logo'>
                <img src={project.logo} alt={project.logo} />
            </div>

            <div className='project-preview-title'>
                <h1>{project.index}. {project.name}</h1>
                <h1>&gt;</h1>
            </div>
        </div>
    )
}

export default ProjectDiv