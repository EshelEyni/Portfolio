import { FC } from "react";
import "./SocialLinks.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { copyToClipboard } from "../../services/utilService";
import toast from "react-hot-toast";

export const SocialLinks: FC = () => {
  function handleEmailClick() {
    const email = "esheleyni@gmail.com";
    copyToClipboard(email);
    toast.success(<div>"Email copied to clipboard"</div>);
  }

  return (
    <section className="social-links">
      <a
        href="https://www.linkedin.com/in/eshel-eyni-71982b220/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__linkedin"
      >
        <FaLinkedin className="social-links__icon" />
      </a>
      <a
        href="https://github.com/EshelEyni"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__github"
      >
        <FaGithub className="social-links__icon" />
      </a>
      <div onClick={handleEmailClick} className="social-links__email">
        <FaEnvelope className="social-links__icon" />
      </div>
    </section>
  );
};
