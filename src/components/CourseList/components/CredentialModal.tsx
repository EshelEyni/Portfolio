import { FC, useEffect } from "react";
import { Course } from "../../../types";
import "./CredentialModal.scss";

type CredentialModalProps = {
  course: Course;
  onClose: () => void;
};

export const CredentialModal: FC<CredentialModalProps> = ({
  course,
  onClose,
}) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="credential-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="credential-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-modal-title"
      >
        <header className="credential-modal__header">
          <div>
            <span className="credential-modal__eyebrow">Credential</span>
            <h2 id="credential-modal-title">{course.name}</h2>
          </div>
          <button
            className="credential-modal__close"
            type="button"
            aria-label="Close credential"
            autoFocus
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <div className="credential-modal__image-container">
          <img
            className="credential-modal__image"
            src={course.imgUrl}
            alt={`${course.name} credential`}
          />
        </div>
      </section>
    </div>
  );
};
