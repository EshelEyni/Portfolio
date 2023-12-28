import { FC } from "react";
import { Course } from "../../services/dataService";
import "./CourseList.scss";

type CourseListProps = {
  courses: Course[];
};

export const CourseList: FC<CourseListProps> = ({ courses }) => {
  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li className="course-list__item" key={course.id}>
          <header className="course-list__item__header">
            <div className="course-list__item__header__logo-container">
              <img
                className="course-list__item__header__logo"
                src={course.logo}
                alt="logo"
              />
            </div>
            <h3 className="course-list__item__header__title">{`${course.name} - ${course.year}`}</h3>
          </header>
          <img
            className="course-list__item__img"
            src={course.imgUrl}
            alt="certifcate"
          />
        </li>
      ))}
    </ul>
  );
};
