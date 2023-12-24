import { FC } from "react";
import "./CourseDetails.scss";
import { useParams } from "react-router-dom";

export const CourseDetails: FC = () => {
  const params = useParams();
  console.log(params);

  return <div>CourseDetails</div>;
};
