import { useRouter } from 'next/router';
import { projectsData } from '@/data/projects-data';
import ImageGallery from './image-gallery';

const ProjectDetails = () => {
    const router = useRouter();
    const { projectId } = router.query;
    const projectIdInt = parseInt(projectId, 10);
    const project = projectsData.find(proj => proj.id === projectIdInt);

    if (!project) return <div>Project not found</div>;

    return (
        <div>
            <br />
            <h1>{project.title}</h1>
            <br />
            <p>{project.description}</p>
            <br /><br />
            <h2>Technologies</h2>
            <br />
            <p>{project.technologies}</p>
            <br /><br />
            <h2>Screenshots</h2>
            <ImageGallery project={project} />
            <br /><br />
            <h2>Live demo</h2>
            <br />
            <a href={project.demo}>{project.demo}</a>
            <br /><br />
            <h2>Github</h2>
            <br />
            <a href={project.gitHubLink}>{project.gitHubLink}</a>
            <br /><br />
            <br />
        </div>
    );
};

export default ProjectDetails;