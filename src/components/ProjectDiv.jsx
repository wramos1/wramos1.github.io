import React, { useState } from 'react'
import ProjectModal from './ProjectModal';

const ProjectDiv = ({ project }) => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const toggleProject = () => {
        setIsProjectOpen(!isProjectOpen);
        document.body.classList.remove('scroll');
        document.body.classList.add('no-scroll');
        document.querySelector('.navbar').classList.add('not-fixed');
        document.querySelector('#modalRoot').classList.add('scale-1');
        document.querySelector('#modalRoot').classList.remove('scale-0');
    };

    const toggleFromModal = (value) => {
        if (value === false) {
            setIsProjectOpen(!isProjectOpen);
            document.body.classList.remove('no-scroll');
            document.body.classList.add('scroll');
            document.querySelector('.navbar').classList.remove('not-fixed');
            document.querySelector('#modalRoot').classList.remove('scale-1');
            document.querySelector('#modalRoot').classList.add('scale-0');
        }
        else return;
    }

    return (
        <>
            <div className='project-preview-div' onClick={() => toggleProject()}>
                <div className='project-preview-logo'>
                    <img src={project.logo} alt={project.logo} />
                </div>

                <div className='project-preview-title'>
                    <h1>{project.index}. {project.name}
                        <span className='project-subTitle'>{project.subTitle}</span>
                    </h1>
                    <h1>&gt;</h1>
                </div>

            </div>
            <ProjectModal
                toggleProject={(value) => toggleFromModal(value)}
                project={project}
                show={isProjectOpen}
            />
        </>


    )
}

export default ProjectDiv