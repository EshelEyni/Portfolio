import { FC, useState } from "react";
import "./NavMenu.scss";
import classnames from "classnames";
import { Nav } from "../Nav/Nav";

type NavMenuProps = {
  isFixedMenu?: boolean;
};

export const NavMenu: FC<NavMenuProps> = ({ isFixedMenu = false }) => {
  const [isClicked, setIsClicked] = useState(false);

  function onMenuClick() {
    document.body.style.overflow = isClicked ? "" : "hidden";
    setIsClicked(!isClicked);
  }

  return (
    <div
      className={classnames("nav-menu", {
        "nav-menu--clicked": isClicked,
        "nav-menu--fixed": isFixedMenu,
      })}
    >
      <label className="nav-menu__button" onClick={onMenuClick}>
        <span className="nav-menu__icon">&nbsp;</span>
      </label>

      <div className="nav-menu__background">&nbsp;</div>
      <Nav setIsMenuClicked={onMenuClick} />
    </div>
  );
};
