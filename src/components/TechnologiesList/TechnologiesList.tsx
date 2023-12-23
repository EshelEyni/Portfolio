import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { InViewSection } from "../InViewSection/InViewSection";
import "./TechnologiesList.scss";

type TechnologiesListProps = {
  title?: string;
  technologies: string[];
};

export const TechnologiesList: FC<TechnologiesListProps> = ({
  title,
  technologies,
}) => {
  const navigate = useNavigate();

  function handleSkillClick(name: string) {
    navigate(`/skill/${name}`);
  }
  return (
    <InViewSection>
      <div className="technologies-list">
        {title && <h2>{title}</h2>}
        <ul className="technologies-list__list">
          {technologies.map((t) => (
            <li key={t} onClick={() => handleSkillClick(t)}>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </InViewSection>
  );
};
