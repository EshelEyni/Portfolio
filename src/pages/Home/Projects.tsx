import { FC } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import "./Projects.scss";
import { projects } from "../../services/dataService";
import { ProjectPreview } from "./ProjectPreview";
import { InViewSection } from "../../components/InViewSection/InViewSection";

export const Projects: FC = () => {
  return (
    <section id="projects" className="projects">
      <SectionHeader
        title="projects"
        description="Here you can find some of my projects. Click on a project to learn more about it."
      />

      <ul className="projects__list">
        {projects.map((project, i) => (
          <InViewSection key={project.name}>
            <ProjectPreview project={project} idx={i} />
          </InViewSection>
        ))}
      </ul>
    </section>
  );
};
