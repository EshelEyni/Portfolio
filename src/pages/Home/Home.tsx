import { FC, useEffect } from "react";
import "./Home.scss";
import { Intro } from "./Intro";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";
import { useLocation } from "react-router-dom";
import { Education } from "./Education";

export const Home: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.id;
    console.log(id);
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    if (id) location.state.id = "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home-page">
      <Intro />
      <About />
      <Contact />
      <Resume />
      <Education />
      <Projects />
    </main>
  );
};
