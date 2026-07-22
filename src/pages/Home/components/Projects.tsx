import { FC } from "react";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import "./Projects.scss";
import { projects } from "../../../data/projects";
import { ProjectList } from "../../../components/ProjectList/ProjectList";

export const Projects: FC = () => {
  return (
    <section id="projects" className="projects">
      <SectionHeader
        title="projects"
        description="Here you can find some of my projects. Click on a project to learn more about it."
      />

      <ProjectList projects={projects} />
    </section>
  );
};
