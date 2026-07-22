import { FC, useEffect, type ComponentType } from "react";
import "./Home.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { homeNavigation, type HomeSectionId } from "../../config/navigation";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";

const sectionComponents: Record<HomeSectionId, ComponentType> = {
  intro: Intro,
  resume: Resume,
  about: About,
  projects: Projects,
  education: Education,
};

export const Home: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.id;
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    if (id) navigate(location.pathname, { replace: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home-page">
      {homeNavigation.map(({ id }, index) => {
        const Component = sectionComponents[id];
        const tintDirection = index % 2 === 0 ? "down" : "up";

        return (
          <div
            className={`home-page__section home-page__section--tint-${tintDirection}`}
            key={id}
          >
            <Component />
          </div>
        );
      })}
    </main>
  );
};
