import './ProjectList.css';
import ProjectCategory from '../ProjectCategory/ProjectCategory';
import Project from '../Project/Project';

export default function ProjectList() {

    return (
        <>
            <h1 className="heading">Кейсы</h1>
            <ProjectCategory />
            <div className="projects">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </>
    )
}