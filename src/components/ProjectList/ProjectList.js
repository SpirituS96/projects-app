import './ProjectList.css';
import ProjectCategory from '../ProjectCategory/ProjectCategory';
import Project from '../Project/Project';

export default function ProjectList({projects, categories}) {
    let projectsList;

    if (projects.hasOwnProperty('items')) {
        projectsList = projects.items.map((item) => <Project data={item} />);
    } else {
        projectsList = <p>Loading...</p>;
    }
    return (
        <>
            <h1 className="heading">Кейсы</h1>
            <ProjectCategory data={categories} className="category-list" />
            <div className="projects">
                {projectsList}
            </div>
        </>
    )
}