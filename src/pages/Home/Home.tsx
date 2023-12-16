import { FC } from "react";
import "./Home.scss";
import { Intro } from "./Intro";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home: FC = () => {
  return (
    <main className="home-page">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Resume />
      {/* <Sidebar /> */}
    </main>
  );
};
