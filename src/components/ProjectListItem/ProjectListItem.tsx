import { ProjectData, techImages } from "../constants";
import "./ProjectListItem.css";

type ProjectListItemProps = {
  project: ProjectData;
  clickFunction: () => void;
  selected: boolean;
};

export function ProjectListItem({
  project: { name, technologies },
  clickFunction,
  selected,
}: ProjectListItemProps) {
  return (
    <div
      className={`project-list-item ${selected ? "selected" : ""}`}
      onClick={clickFunction}
    >
      <div className="project-list-item-decoration"></div>
      <div>
        <div>{name}</div>
        <div className="project-list-item-techs">
          {technologies.map((tech) => {
            const techImage = techImages.find((img) => img.technology === tech);
            return <img src={techImage ? techImage.imgPath : ""} alt={tech} />;
          })}
        </div>
      </div>
    </div>
  );
}
