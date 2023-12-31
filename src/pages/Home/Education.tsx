import { FC } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import "./Education.scss";
import { CourseList } from "../../components/CourseList/CourseList";
import { courses } from "../../services/dataService";

export const Education: FC = () => {
  return (
    <section id="education" className="education">
      <SectionHeader
        title="Education"
        description="The Courses I have taken and the Certifications I have earned."
      />
      <CourseList courses={courses} />
    </section>
  );
};
