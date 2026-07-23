import { FC } from "react";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import "./Resume.scss";
import { InViewSection } from "../../../components/InViewSection/InViewSection";

export const Resume: FC = () => {
  return (
    <section id="resume" className="resume">
      <SectionHeader
        title="resume"
        description="A concise overview of my experience, technical skills, and education."
      />

      <InViewSection>
        <div className="resume__container">
          <a
            target="_blank"
            rel="noreferrer"
            href="/documents/Eshel Eyni - CV.pdf"
            download="Eshel Eyni - CV.pdf"
            className="resume__button btn btn--animated"
          >
            <span>Download CV</span>
          </a>
        </div>
      </InViewSection>
    </section>
  );
};
