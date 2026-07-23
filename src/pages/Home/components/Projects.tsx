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
        description="Selected full-stack projects spanning real-time systems, AI integrations, creative tools, and interactive experiences."
      />

      <ProjectList projects={projects} />
    </section>
  );
};
