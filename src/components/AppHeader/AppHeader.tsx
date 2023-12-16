import { FC } from "react";
import "./AppHeader.scss";
import { scrollToElementById } from "../../services/utilService";

export const AppHeader: FC = () => {
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
    scrollToElementById(e);
  }

  return (
    <header className="app-header">
      <div className="user-display">
        <img src="/android-chrome-512x512.png" alt="user-img" />

        <h2>Eshel Eyni</h2>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavLinkClick}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
