import { FC } from "react";
import { scrollToElementById } from "../../services/utilService";
import "./About.scss";
import { useNavigate } from "react-router-dom";
import { InViewSection } from "../../components/InViewSection/InViewSection";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";

export const About: FC = () => {
  const navigate = useNavigate();

  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "JQuery",
    "React",
    "Redux",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
  ];

  function handleContactClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    scrollToElementById(e);
  }

  function handleSkillClick(name: string) {
    navigate(`/skill/${name}`);
  }

  return (
    <section id="about" className="about">
      <SectionHeader
        title="about me"
        description="Here you will find more information about me, and my current skills
        in terms of programming and technology."
      />      
      <div className="about__content">
        <InViewSection>
          <div className="about__desc">
            <h2>Get to know me!</h2>
            <div className="about__desc__content">
              <p>
                I'm a <strong>Web Developer</strong> building Web Applications
                that leads to the success of the overall product. Check out some
                of my work in the <strong>Projects</strong> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my{" "}
                <a
                  href="https://www.linkedin.com/in/eshel-eyni-71982b220/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>{" "}
                where I post useful content related to Web Development and
                Programming
              </p>
              <p>
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <strong>contact</strong> me.
              </p>
            </div>

            <a
              className="btn btn--animated"
              href="#contact"
              onClick={handleContactClick}
            >
              <span>contact</span>
            </a>
          </div>
        </InViewSection>
        <InViewSection>
          <div className="about__skills">
            <h2>my skills</h2>
            <ul className="about__skills__list">
              {skills.map((skill) => (
                <li key={skill} onClick={() => handleSkillClick(skill)}>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </InViewSection>
      </div>
    </section>
  );
};
