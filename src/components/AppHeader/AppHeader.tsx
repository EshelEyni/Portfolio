import { FC } from "react";
import "./AppHeader.scss";

import { NavMenu } from "../NavMenu/NavMenu";
import { Nav } from "../Nav/Nav";

export const AppHeader: FC = () => {
  return (
    <header id="app-header" className="app-header">
      <div className="user-display">
        <img src="/android-chrome-512x512.png" alt="user-img" />
        <h2 className="user-display__name">Eshel Eyni</h2>
      </div>
      <NavMenu />
      <Nav />
    </header>
  );
};
