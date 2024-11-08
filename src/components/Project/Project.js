import './Project.css';
import figure from '../../figure.svg';

export default function Project({data}) {
    console.log(data);
    const {id, image : imgURL, title} = data;
    return (
        <div className="project-container" id={id}>
            <img className="project-img" src={imgURL} alt="project" />
            <div className="project-info">
                <img className="figure" src={figure} alt="" />
                <span className="project-name">{title}</span>
            </div>
        </div>
    )
}