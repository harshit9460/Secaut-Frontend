import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/ums-dashboard");
  }, [navigate]);

  const onRegisterTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className={`frame-parent9 ${className}`}>
      <div className="logo-frame">
        <div className="logo6" onClick={onLogoContainerClick}>
          <div className="vector-parent4">
            <img
              className="frame-child63"
              loading="lazy"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="logo-backgrounds" />
            <div className="logo-backgrounds1" />
            <div className="logo-backgrounds2" />
          </div>
          <div className="secauth-container">
            <div className="secauth6">
              <b>Sec</b>
              <span className="auth6">auth</span>
            </div>
          </div>
        </div>
      </div>
      <div className="login-wrapper">
        <h1 className="login2">Login</h1>
      </div>
      <div className="unlock-the-door-to-your-digita-container">
        <h2 className="unlock-the-door1">
          Unlock the door to your digital world
        </h2>
      </div>
      <div className="text-input10">
        <div className="name-input-labels">
          <div className="name10">Email</div>
          <div className="whats-your-name10">What’s your Email?</div>
        </div>
        <div className="input-icon-wrapper">
          <div className="input-icon">
            <div className="input-icon-s">!</div>
          </div>
        </div>
      </div>
      <div className="text-input11">
        <div className="name-parent4">
          <div className="name11">Password</div>
          <div className="whats-your-name11">What’s your Password?</div>
        </div>
        <div className="text-input-inner4">
          <div className="wrapper6">
            <div className="div10">!</div>
          </div>
        </div>
      </div>
      <div className="button-frame" onClick={onFrameContainerClick}>
        <div className="button30">
          <div className="button31">Proceed to Login</div>
        </div>
      </div>
      <div className="or-continue-with-wrapper">
        <div className="or-continue-with">Or Continue with</div>
      </div>
      <div className="social-buttons-wrapper">
        <div className="social-buttons">
          <img
            className="google-icon"
            loading="lazy"
            alt=""
            src="/google@2x.png"
            onClick={onFrameContainerClick}
          />
          <img
            className="facebook-icon2"
            loading="lazy"
            alt=""
            src="/facebook1@2x.png"
            onClick={onFrameContainerClick}
          />
        </div>
      </div>
      <div className="register-link-wrapper">
        <div className="register-link">
          <div className="dont-have-an">Don’t have an account?</div>
          <div className="register2" onClick={onRegisterTextClick}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
