import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { InViewSection } from "../InViewSection/InViewSection";
import "./TechnologiesList.scss";
import { skills } from "../../services/dataService";
import classNames from "classnames";

type TechnologiesListProps = {
  title?: string;
  technologies?: string[];
};

const defaultTechnologies = skills.map((s) => s.name);

export const TechnologiesList: FC<TechnologiesListProps> = ({
  title,
  technologies = defaultTechnologies,
}) => {
  const navigate = useNavigate();

  function handleSkillClick(name: string) {
    navigate(`/skill/${name}`);
  }

  return (
    <InViewSection>
      <div className="technologies">
        {title && <h2>{title}</h2>}
        <ul className="technologies__list">
          {technologies.map((t) => {
            const existsInSkills = skills.some(
              (s) => s.name.toLowerCase() === t.toLowerCase()
            );

            return (
              <li
                key={t}
                className={classNames("technologies__list__item", {
                  "technologies__list__item--active": existsInSkills,
                })}
                onClick={() => {
                  if (!existsInSkills) return;
                  handleSkillClick(t);
                }}
              >
                <span>{t}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </InViewSection>
  );
};
