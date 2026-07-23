import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { NotFoundMessage } from "../../components/NotFoundMessage/NotFoundMessage";
import "./SkillDetails.scss";
import { CourseList } from "../../components/CourseList/CourseList";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { professionalExperience } from "../../data/professionalExperience";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";

export const SkillDetails: FC = () => {
  const params = useParams();
  const { name } = params;
  const skill = skills.find((s) => s.name.toLowerCase() === name?.toLowerCase());
  const skillCourses = courses.filter((c) => skill?.courseIds.includes(c.id));
  const skillProjects = projects.filter((p) =>
    skill?.projectNames.includes(p.name),
  );
  const skillProfessionalExperience = professionalExperience.filter((p) =>
    skill?.professionalExperienceIds.includes(p.id),
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!skill)
    return (
      <main className="skill-details">
        <NotFoundMessage entityName="Skill" />
      </main>
    );

  return (
    <main className="skill-details">
      <header className="skill-details__header">
        <div className="skill-details__content">
          <img className="skill-details__logo" src={skill.logo} alt="logo" />
          <h1 className="skill-details__title">{skill.name}</h1>
        </div>
      </header>

      {skillProfessionalExperience.length > 0 && (
        <section className="skill-details__section">
          <h2 className="skill-details__section-title">
            Proffesional Experience
          </h2>

          {skillProfessionalExperience.map((p) => {
            const dateTitle = `${new Date(p.startDate).getFullYear()} - ${
              p.endDate === "Present"
                ? p.endDate
                : new Date(p.endDate).getFullYear()
            }`;
            return (
              <article
                className="skill-details__proffesional-experience-item"
                key={p.id}
              >
                <header className="skill-details__experience-header">
                  <img
                    src={p.logo}
                    alt={`${p.companyName} logo`}
                    className="skill-details__experience-header-logo"
                  />
                </header>
                <h3 className="skill-details__experience-position">{`${p.position} (${dateTitle})`}</h3>
                <p className="skill-details__experience-description">
                  {p.description}
                </p>
              </article>
            );
          })}
        </section>
      )}

      {skillCourses.length > 0 && (
        <section className="skill-details__section">
          <h2 className="skill-details__section-title">Courses</h2>
          <CourseList courses={skillCourses} />
        </section>
      )}

      {skillProjects.length > 0 && (
        <section className="skill-details__section">
          <h2 className="skill-details__section-title">Projects</h2>
          <ProjectList projects={skillProjects} />
        </section>
      )}
    </main>
  );
};
