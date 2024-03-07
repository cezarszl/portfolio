import Link from 'next/link.js';
import { projectsData } from '../data/projects-data.js';

const Projects = () => {
    return (
        <div id="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsData && projectsData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                                <a href={project.demo}><i className="fa-solid fa-play"></i></a>
                            </div>
                        </div>
                        <div className='project'>
                            <Link href={`/projects/${project.id}`}><h3>{project.title}</h3></Link>
                            <p>{project.description}</p>
                            <Link className='view-details' href={`/projects/${project.id}`}>
                                VIEW DETAILS
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;