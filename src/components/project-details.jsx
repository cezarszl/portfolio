import { useRouter } from 'next/router';
import { projectsData } from '@/data/projects-data';

const ProjectDetails = () => {
    const router = useRouter();
    const { projectId } = router.query;
    const projectIdInt = parseInt(projectId, 10);
    const project = projectsData.find(proj => proj.id === projectIdInt);

    if (!project) return <div>Project not found</div>;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProjectDetails;