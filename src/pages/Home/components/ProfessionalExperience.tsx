import { FC } from "react";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { InViewSection } from "../../../components/InViewSection/InViewSection";
import { professionalExperience } from "../../../data/professionalExperience";
import "./ProfessionalExperience.scss";
import { TechnologiesList } from "../../../components/TechnologiesList/TechnologiesList";

export const ProfessionalExperience: FC = () => {
  return (
    <section id="experience" className="professional-experience">
      <SectionHeader
        title="Professional Experience"
        description="Production software, complex systems, and growing technical ownership across enterprise, geospatial, and AI products."
      />

      <div className="professional-experience__timeline">
        {professionalExperience.map((experience) => (
          <InViewSection key={experience.id}>
            <article className="experience-card">
              <div className="experience-card__marker" aria-hidden="true" />

              <header className="experience-card__header">
                <a
                  className="experience-card__logo"
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${experience.companyName}`}
                >
                  <img
                    src={experience.logo}
                    alt={`${experience.companyName} logo`}
                  />
                </a>

                <div className="experience-card__heading">
                  <p className="experience-card__period">
                    {experience.startDate} — {experience.endDate}
                  </p>
                  <h2>{experience.position}</h2>
                  <p className="experience-card__company">
                    {experience.companyName}
                    <span aria-hidden="true">·</span>
                    {experience.location}
                  </p>
                </div>
              </header>

              <p className="experience-card__summary">
                {experience.description}
              </p>

              <ul className="experience-card__achievements">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <TechnologiesList technologies={experience.technologies} />
            </article>
          </InViewSection>
        ))}
      </div>
    </section>
  );
};
