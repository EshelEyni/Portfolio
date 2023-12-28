import { FC, useState } from "react";
import "./AppHeader.scss";
import { NavMenu } from "../NavMenu/NavMenu";
import { Nav } from "../Nav/Nav";
import { UserDisplay } from "../UserDisplay/UserDisplay";
import VisibilitySensor from "react-visibility-sensor";
import classNames from "classnames";

export const AppHeader: FC = () => {
  const [isHidden, SetIsHidden] = useState(false);

  function handleVisibilityChange(isVisible: boolean) {
    SetIsHidden(!isVisible);
    console.log("AppHeader is visible: ", isVisible);
  }

  return (
    <VisibilitySensor
      onChange={handleVisibilityChange}
      partialVisibility={true}
    >
      <header
        id="app-header"
        className={classNames("app-header", {
          "app-header--hidden": isHidden,
        })}
      >
        <UserDisplay />
        <NavMenu />
        <Nav />
        <NavMenu isFixedMenu={true} />
      </header>
    </VisibilitySensor>
  );
};
