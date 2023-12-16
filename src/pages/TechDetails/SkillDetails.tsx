import { FC } from "react";
import { useParams } from "react-router-dom";

export const SkillDetails: FC = () => {
  const params = useParams();
  console.log(params);
  return <div>TechDetails</div>;
};
