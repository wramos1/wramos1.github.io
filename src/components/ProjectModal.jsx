import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/Project.css'

const ProjectModal = ({ project, toggleProject, show }) => {

    const modalClose = (e) => {
        let truthValue = document.querySelector('.project-overview').contains(e.target);
        toggleProject(truthValue);
    }

    const modal = show ? (
        <div className='project-container' onClick={(e) => modalClose(e)}>
            <button className='close-project-btn'>
                X
            </button>

            <div className='project-contents'>
                <img className='project-logo' src={project.logo} alt="logo" />

                <div className="project-overview">

                    <div className='project-details'>
                        <div className="title-and-tech">
                            <h2>{project.name}</h2>
                            <p className='tech-stack'>Tech Stack: {project.stack.join(', ').toString()}</p>
                        </div>


                        <div className="descriptions-and-imgs">
                            {project.imgsWithDescriptions.map((item, i) => {
                                return (
                                    <div key={i} className="description-block">
                                        <p className="description-for-img">
                                            {item.description}
                                        </p>
                                        <img className='img-for-description' src={item.imgSrc} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                    <div className='project-btns'>
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

            </div>

        </div>) : null;

    return ReactDOM.createPortal(
        modal,
        document.querySelector('#modalRoot')
    )
}

export default ProjectModal