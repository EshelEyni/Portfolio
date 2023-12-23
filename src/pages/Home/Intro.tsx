import { FC } from "react";
import "./Intro.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Intro: FC = () => {
  return (
    <section id="intro" className="intro">
      <div className="intro__content">
        <h1>
          hi. i'm <span>eshel eyni</span>
        </h1>
        <p>
          A Web Developer committed to building high-quality, scalable websites.
          Precision in code and attention to detail are my hallmarks.
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
