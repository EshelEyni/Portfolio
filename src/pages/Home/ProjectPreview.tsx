import { FC } from "react";
import { Project } from "../../services/dataService";
import "./ProjectPreview.scss";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

type ProjectPreviewProps = {
  project: Project;
  idx: number;
};

export const ProjectPreview: FC<ProjectPreviewProps> = ({ project, idx }) => {
  const navigate = useNavigate();
  const rowReverse = (idx + 1) % 2 === 0 ? true : false;

  function onNavigate() {
    navigate(`/project/${project.name}`);
  }

  return (
    <article
      className={classNames("project-preview", {
        "project-preview--row-reverse": rowReverse,
      })}
    >
      <img
        className="project-preview__image"
        src={project.imageUrl}
        alt={project.name}
        onClick={onNavigate}
      />

      <div className="project-preview__content">
        <h3 className="project-preview__content__title">{project.name}</h3>
        <p className="project-preview__content__description">
          {project.description}
        </p>
        <button className="btn btn--animated" onClick={onNavigate}>
          <span>details</span>
        </button>
      </div>
    </article>
  );
};
