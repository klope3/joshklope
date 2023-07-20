import { ProjectData, techImages } from "../constants";
import "./ProjectInfoView.css";

type ProjectInfoViewProps = {
  project: ProjectData;
};

export function ProjectInfoView({ project }: ProjectInfoViewProps) {
  return (
    <div className="project-info-view">
      <img src={project.imgPath} alt={project.name} />
      <h4>{project.name}</h4>
      <div className="project-info-links">
        {project.githubLink.length ? (
          <a href={project.githubLink} target="_blank">
            GitHub
          </a>
        ) : (
          ""
        )}
        {project.demoLink.length ? (
          <a href={project.demoLink} target="_blank">
            Try it!
          </a>
        ) : (
          ""
        )}
      </div>
      <p>{project.descriptionLong}</p>
    </div>
  );
}
