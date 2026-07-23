import { FC } from "react";
import "./SocialLinks.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { copyToClipboard } from "../../services/utilService";
import toast from "react-hot-toast";

type SocialLinksProps = {
  tooltipPosition?: "bottom" | "right";
};

export const SocialLinks: FC<SocialLinksProps> = ({
  tooltipPosition = "bottom",
}) => {
  function handleEmailClick() {
    const email = "esheleyni@gmail.com";
    copyToClipboard(email);
    toast.success("Email copied");
  }

  return (
    <section
      className={`social-links social-links--tooltip-${tooltipPosition}`}
    >
      <a
        href="https://www.linkedin.com/in/eshel-eyni-71982b220/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item social-links__linkedin"
        aria-label="Open LinkedIn profile"
        data-tooltip="LinkedIn"
      >
        <FaLinkedin className="social-links__icon" aria-hidden="true" />
      </a>
      <a
        href="https://github.com/EshelEyni"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item social-links__github"
        aria-label="Open GitHub profile"
        data-tooltip="GitHub"
      >
        <FaGithub className="social-links__icon" aria-hidden="true" />
      </a>
      <button
        type="button"
        onClick={handleEmailClick}
        className="social-links__item social-links__email"
        aria-label="Copy email address"
        data-tooltip="Copy email"
      >
        <FaEnvelope className="social-links__icon" aria-hidden="true" />
      </button>
    </section>
  );
};
