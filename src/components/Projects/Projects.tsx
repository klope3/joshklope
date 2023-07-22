import { useState } from "react";
import { ProjectInfoView } from "../ProjectInfoView/ProjectInfoView";
import { ProjectListItem } from "../ProjectListItem/ProjectListItem";
import { projects } from "../constants";
import "./Projects.css";

export function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section id="Projects">
      <div className="projects-container">
        <div className="projects-bar">
          <h3>PROJECTS</h3>
        </div>
        <div className="projects-flex">
          <div className="projects-scroll">
            {projects.map((project, i) => (
              <ProjectListItem
                key={i}
                project={project}
                clickFunction={() => {
                  setProjectIndex(i);
                  const projects = document.getElementById("Projects");
                  console.log(projects);
                  projects?.scrollIntoView();
                }}
                selected={projectIndex === i}
              />
            ))}
          </div>
          <ProjectInfoView project={projects[projectIndex]} />
        </div>
      </div>
    </section>
  );
}
