import { FC, useEffect } from "react";
import "./Home.scss";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { useLocation, useNavigate } from "react-router-dom";
import { Education } from "./components/Education";

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
      <Intro />
      <About />
      <Projects />
      <Education />
      <Resume />
    </main>
  );
};
