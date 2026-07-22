import { FC } from "react";
import { scrollToElementById } from "../../services/utilService";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import { homeNavigation } from "../../config/navigation";

type NavProps = {
  setIsMenuClicked?: (isClicked: boolean) => void;
};

export const Nav: FC<NavProps> = ({ setIsMenuClicked }) => {
  const navigate = useNavigate();

  function handleNavLinkClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();
    setIsMenuClicked?.(false);
    const isHomePage = window.location.pathname.includes("home");
    if (isHomePage) return scrollToElementById(e);
    const href = e.currentTarget.getAttribute("href");
    if (!href) return navigate("/home");
    const id = href.replace("#", "");
    navigate("/home", { state: { id } });
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        {homeNavigation.map(({ id, label }) => (
          <li key={id} className="nav__item">
            <a
              href={`#${id}`}
              onClick={handleNavLinkClick}
              className="nav__link"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
