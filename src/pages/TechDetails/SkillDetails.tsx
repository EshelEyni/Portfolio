import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { skills } from "../../services/dataService";
import { NotFoundMessage } from "../../components/NotFoundMessage/NotFoundMessage";

export const SkillDetails: FC = () => {
  const params = useParams();
  const { name } = params;
  const skill = skills.find((s) => s.name === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!skill)
    return (
      <main className="skill-details">
        <NotFoundMessage entityName="Skill" />
      </main>
    );

  return (
    <main className="skill-details">
      {skills.map((skill) => (
        <div>
          <h3>{`${skill.name}`}</h3>
          <img src={skill.logo} alt="" />
        </div>
      ))}
    </main>
  );
};
