import { FC } from "react";
import "./AppHeader.scss";
import { NavMenu } from "../NavMenu/NavMenu";
import { Nav } from "../Nav/Nav";
import { UserDisplay } from "../UserDisplay/UserDisplay";

export const AppHeader: FC = () => {
  return (
    <header id="app-header" className="app-header">
      <UserDisplay />
      <NavMenu />
      <Nav />
    </header>
  );
};
