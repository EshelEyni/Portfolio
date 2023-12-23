import { FC } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../services/dataService";

export const ProjectDetails: FC = () => {
  const params = useParams<{ name: string }>();
  const { name } = params;

  const porject = projects.find((p) => p.name === name);
  if (!porject) {
    return <div>Project not found</div>;
  }

  return <div>{porject.name}</div>;
};
