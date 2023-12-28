import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDisplay.scss";

export const UserDisplay: FC = () => {
  const navigate = useNavigate();

  function handleUserDisplayClick() {
    const isHomePage = window.location.pathname.includes("home");
    if (isHomePage)
      return window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    navigate("/home");
  }
  return (
    <div className="user-display" onClick={handleUserDisplayClick}>
      <img src="/android-chrome-512x512.png" alt="user-img" />
      <h2 className="user-display__name">Eshel Eyni</h2>
    </div>
  );
};
