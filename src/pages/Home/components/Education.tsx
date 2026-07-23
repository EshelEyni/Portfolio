import { FC, useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import "./Education.scss";
import { CourseList } from "../../../components/CourseList/CourseList";
import { courses } from "../../../data/courses";

export const Education: FC = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const featuredCourseIds = new Set(["1", "6", "8", "15", "16", "17"]);
  const visibleCourses = showAllCourses
    ? courses
    : courses.filter((course) => featuredCourseIds.has(course.id));

  return (
    <section id="education" className="education">
      <SectionHeader
        title="Education & Continuous Learning"
        description="Formal training and selected coursework across software architecture, testing, databases, and modern web development."
      />
      <CourseList courses={visibleCourses} />
      <button
        className="education__toggle"
        type="button"
        aria-expanded={showAllCourses}
        onClick={() => setShowAllCourses((isVisible) => !isVisible)}
      >
        {showAllCourses
          ? "Show featured courses"
          : `View all ${courses.length} courses`}
      </button>
    </section>
  );
};
