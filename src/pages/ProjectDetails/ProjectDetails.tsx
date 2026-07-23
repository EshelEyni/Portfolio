import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectDetails.scss";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { InViewSection } from "../../components/InViewSection/InViewSection";
import { TechnologiesList } from "../../components/TechnologiesList/TechnologiesList";
import { NotFoundMessage } from "../../components/NotFoundMessage/NotFoundMessage";

export const ProjectDetails: FC = () => {
  const params = useParams<{ name: string }>();

  const { name } = params;
  const project = projects.find((p) => p.name === name);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!project)
    return (
      <main className="project-details">
        <NotFoundMessage entityName="Project" />
      </main>
    );

  return (
    <main className="project-details">
      <SectionHeader title={project.name} description={project.description} />

      <InViewSection>
        <div className="project-details__links">
          <a
            href={project.gitHubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-details__github-link btn btn-animated"
          >
            View source
          </a>

          {project.liveInstanceUrl && (
            <a
              href={project.liveInstanceUrl}
              target="_blank"
              rel="noreferrer"
              className="project-details__github-link btn btn-animated"
            >
              Live demo
            </a>
          )}
        </div>
      </InViewSection>

      <InViewSection>
        <img
          className="project-details__image"
          src={project.imageUrl}
          alt={`${project.name} interface`}
        />
      </InViewSection>

      <div className="project-details__features">
        <InViewSection>
          <h3 className="project-details__features__title">Features</h3>
        </InViewSection>
        <InViewSection>
          <ul className="project-details__features__list">
            {project.features.map((feature) => (
              <li
                className="project-details__features__item"
                key={feature.title}
              >
                <div className="project-details__features__item__bullet"></div>
                <p className="project-details__features__item__description">
                  <strong className="project-details__features__item__title">
                    {feature.title}:{" "}
                  </strong>
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </InViewSection>
      </div>

      <div className="project-details__technologies">
        <InViewSection>
          <h3 className="project-details__technologies__title">Tech stack</h3>
        </InViewSection>
        <TechnologiesList technologies={project.technologies} />
      </div>
    </main>
  );
};
