import { FC } from "react";
import { Project } from "../../services/dataService";
import { InViewSection } from "../InViewSection/InViewSection";
import { ProjectPreview } from "../../pages/Home/ProjectPreview";
import "./ProjectList.scss";

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul className="projects-list">
      {projects.map((project, i) => (
        <InViewSection key={project.name}>
          <ProjectPreview project={project} idx={i} />
        </InViewSection>
      ))}
    </ul>
  );
};
