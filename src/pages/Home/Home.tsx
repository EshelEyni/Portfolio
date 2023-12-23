import { FC, useEffect } from "react";
import "./Home.scss";
import { Intro } from "./Intro";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";
import { useLocation } from "react-router-dom";

export const Home: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.id;
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
    if (id) delete location.state.id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home-page">
      <Intro />
      <About />
      <Contact />
      <Resume />
      <Projects />
    </main>
  );
};
