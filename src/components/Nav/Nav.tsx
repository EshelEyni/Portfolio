import { FC } from "react";
import { scrollToElementById } from "../../services/utilService";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

type NavProps = {
  setIsMenuClicked?: (isClicked: boolean) => void;
};

export const Nav: FC<NavProps> = ({ setIsMenuClicked }) => {
  const navigate = useNavigate();

  const links = [
    { href: "#intro", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
    { href: "#resume", text: "Resume" },
  ];

  function handleNavLinkClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
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
        {links.map((link) => (
          <li key={link.href} className="nav__item">
            <a
              href={link.href}
              onClick={handleNavLinkClick}
              className="nav__link"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
