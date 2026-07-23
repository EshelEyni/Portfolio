import { FC } from "react";
import "./AppFooter.scss";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { InViewSection } from "../InViewSection/InViewSection";

export const AppFooter: FC = () => {
  return (
    <footer className="app-footer">
      <InViewSection>
        <div className="app-footer__main-content">
          <div className="app-footer__main-content__user-info">
            <h2>Eshel Eyni</h2>
            <p>
              Full-stack developer building reliable products and thoughtfully
              engineered user experiences.
            </p>
          </div>

          <div className="app-footer__main-content__social-container">
            <h2>Social</h2>
            <SocialLinks />
          </div>
        </div>

        <p className="app-footer__copyrights">
          <span>&copy;</span> {new Date().getFullYear()}{" "}
          <strong>Eshel Eyni</strong>. Built with care.
        </p>
      </InViewSection>
    </footer>
  );
};
