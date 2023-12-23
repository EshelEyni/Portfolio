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
              A Web Developer committed to building high-quality, scalable
              websites. Precision in code and attention to detail are my
              hallmarks.
            </p>
          </div>

          <div className="app-footer__main-content__social-container">
            <h2>Social</h2>
            <SocialLinks />
          </div>
        </div>

        <p className="app-footer__copyrights">
          <span>&copy;</span> Copyrights {new Date().getFullYear()}. Made by{" "}
          <strong>Eshel Eyni</strong>.
        </p>
      </InViewSection>
    </footer>
  );
};
