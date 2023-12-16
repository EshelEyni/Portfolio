import { FC } from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import "./Sidebar.scss";

export const Sidebar: FC = () => {
  return (
    <aside className="side-bar">
      <SocialLinks />
    </aside>
  );
};
