import { FC } from "react";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import "./Resume.scss";
import { InViewSection } from "../../components/InViewSection/InViewSection";

export const Resume: FC = () => {
  return (
    <section id="resume" className="resume">
      <SectionHeader
        title="resume"
        description="Here you can find my resume. Click on the button below to download it."
      />

      <InViewSection>
        <div className="resume__container">
          <a
            target="_blank"
            rel="noreferrer"
            href="/Eshel Eyni - CV.pdf"
            download="Eshel Eyni - CV.pdf"
            className="resume__button btn btn--animated"
          >
            <span>Resume</span>
          </a>
        </div>
      </InViewSection>
    </section>
  );
};
