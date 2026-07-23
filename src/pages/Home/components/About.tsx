import { FC } from "react";
import "./About.scss";
import { InViewSection } from "../../../components/InViewSection/InViewSection";
import { SectionHeader } from "../../../components/SectionHeader/SectionHeader";
import { TechnologiesList } from "../../../components/TechnologiesList/TechnologiesList";

export const About: FC = () => {
  return (
    <section id="about" className="about">
      <SectionHeader
        title="about me"
        description="The experience, ownership, and engineering approach behind my work."
      />
      <div className="about__content">
        <InViewSection>
          <div className="about__desc">
            <h2>Get to know me!</h2>
            <div className="about__desc__content">
              <p>
                I'm a <strong>full-stack developer</strong> with experience
                building production systems across AI, geospatial technology,
                aviation, and real-time applications. I work across the stack,
                with a particular focus on front-end architecture, complex
                interfaces, performance, and maintainable code.
              </p>
              <p>
                I've taken ownership beyond feature development, including code
                reviews, delivery planning, production support, and direct
                client communication. I enjoy turning complex requirements into
                clear, reliable products.
              </p>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="/documents/Eshel Eyni - CV.pdf"
              download="Eshel Eyni - CV.pdf"
              className="about__desc__resume__button btn btn--animated"
            >
              <span>Download CV</span>
            </a>
          </div>
        </InViewSection>
        <TechnologiesList title="my skills" />
      </div>
    </section>
  );
};
