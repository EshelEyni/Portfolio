import { FC } from "react";
import { Course } from "../../../types";
import "./CourseCard.scss";

type CourseCardProps = {
  course: Course;
  onViewCredential: (course: Course) => void;
};

export const CourseCard: FC<CourseCardProps> = ({
  course,
  onViewCredential,
}) => {
  return (
    <li className="course-card">
      <header className="course-card__header">
        <div className="course-card__logo-container">
          <img className="course-card__logo" src={course.logo} alt="" />
        </div>
        <div className="course-card__content">
          <h3 className="course-card__title">{course.name}</h3>
          <div className="course-card__details">
            <span className="course-card__provider">{course.provider}</span>
            <span aria-hidden="true">·</span>
            <time className="course-card__date" dateTime={`${course.year}`}>
              {course.year}
            </time>
          </div>
        </div>
      </header>
      <button
        className="course-card__credential"
        type="button"
        onClick={() => onViewCredential(course)}
      >
        View credential
      </button>
    </li>
  );
};
