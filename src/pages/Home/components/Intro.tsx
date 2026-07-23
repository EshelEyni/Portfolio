import { FC } from "react";
import "./Intro.scss";
import { Sidebar } from "../../../components/Sidebar/Sidebar";

export const Intro: FC = () => {
  return (
    <section id="intro" className="intro">
      <div className="intro__content">
        <h1>
          hi. i'm <span>eshel eyni</span>
        </h1>
        <p>
          Full-stack developer building reliable, high-performance products
          across web, real-time, geospatial, and AI systems.
        </p>
      </div>

      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <Sidebar />
    </section>
  );
};
