import { FC, useState } from "react";
import { Course } from "../../types";
import { CourseCard } from "./components/CourseCard";
import { CredentialModal } from "./components/CredentialModal";
import "./CourseList.scss";

type CourseListProps = {
  courses: Course[];
};

export const CourseList: FC<CourseListProps> = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <>
      <ul className="course-list">
        {courses.map((course) => (
          <CourseCard
            course={course}
            key={course.id}
            onViewCredential={setSelectedCourse}
          />
        ))}
      </ul>

      {selectedCourse && (
        <CredentialModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
};
