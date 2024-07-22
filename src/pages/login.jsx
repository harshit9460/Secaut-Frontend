import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/frame-component2";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const onHomeButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login">
      <div className="home-button-parent">
        <div className="home-button" onClick={onHomeButtonContainerClick}>
          <div className="home-button-background" />
          <div className="navigation-icon">
            <img
              className="home-icon"
              loading="lazy"
              alt=""
              src="/home@2x.png"
            />
          </div>
        </div>
        <h1 className="secure-user-authentication">{`Secure user authentication for everyone. `}</h1>
        <h3 className="secure-user-authentication1">
          Secure user authentication is the process of verifying the identity of
          a user before granting access to a system or application.
        </h3>
        <div className="frame-parent">
          <img className="frame-icon" alt="" src="/frame-401.svg" />
          <img
            className="arrow-icon"
            loading="lazy"
            alt=""
            src="/arrow-10.svg"
          />
        </div>
        <h2 className="know-more">Know more</h2>
      </div>
      <div className="login-form">
        <FrameComponent2 />
      </div>
    </div>
  );
};

export default Login;
