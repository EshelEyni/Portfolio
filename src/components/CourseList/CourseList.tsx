import { FC } from "react";
import { courses } from "../../services/dataService";
import "./CourseList.scss";
import { useNavigate } from "react-router-dom";

export const CourseList: FC = () => {
  const navigate = useNavigate();

  function onNavigate(id: string) {
    navigate(`/course/${id}`);
  }

  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li className="course-list__item">
          <header
            className="course-list__item__header"
            onClick={() => onNavigate(course.id)}
          >
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
