import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundMessage.scss";

type NotFoundMessageProps = {
  entityName: string;
};

export const NotFoundMessage: FC<NotFoundMessageProps> = ({ entityName }) => {
  const navigate = useNavigate();
  function onGoBack() {
    navigate(-1);
  }

  return (
    <div className="project-details__not-found-message">
      <p>{`🔍 Oops! ${entityName} not found.`}</p>
      <button onClick={onGoBack} className="btn btn-animated">
        Go back
      </button>
    </div>
  );
};
