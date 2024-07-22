import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/ums-dashboard");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="register">
      <div className="logo-wrapper">
        <div className="logo" onClick={onLogoContainerClick}>
          <div className="vector-parent">
            <img
              className="rectangle-icon"
              loading="lazy"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="frame-child21" />
            <div className="frame-child22" />
            <div className="frame-child23" />
          </div>
          <div className="secauth-wrapper">
            <a className="secauth">
              <b>Sec</b>
              <span className="auth">auth</span>
            </a>
          </div>
        </div>
      </div>
      <div className="register-wrapper">
        <h1 className="register1">Register</h1>
      </div>
      <div className="unlock-the-door-to-your-digita-wrapper">
        <h2 className="unlock-the-door">
          Unlock the door to your digital world
        </h2>
      </div>
      <div className="text-input">
        <div className="name-parent">
          <div className="name">Name</div>
          <div className="whats-your-name">What’s your Name?</div>
        </div>
        <div className="input-containers">
          <div className="wrapper">
            <div className="div">!</div>
          </div>
        </div>
      </div>
      <div className="text-input1">
        <div className="name-group">
          <div className="name1">Phone</div>
          <div className="whats-your-name1">Enter Your Phone Number</div>
        </div>
        <div className="text-input-inner">
          <div className="container">
            <div className="div1">!</div>
          </div>
        </div>
      </div>
      <div className="text-input2">
        <div className="name-container">
          <div className="name2">Email</div>
          <div className="whats-your-name2">What’s your Email?</div>
        </div>
        <div className="text-input-child">
          <div className="frame">
            <div className="div2">!</div>
          </div>
        </div>
      </div>
      <div className="text-input3">
        <div className="frame-div">
          <div className="name3">Password</div>
          <div className="whats-your-name3">What’s your Password?</div>
        </div>
        <div className="text-input-inner1">
          <div className="wrapper1">
            <div className="div3">!</div>
          </div>
        </div>
      </div>
      <button className="button-wrapper" onClick={onFrameButtonClick}>
        <div className="button">
          <div className="button1">Continue</div>
        </div>
      </button>
      <div className="login-container-wrapper">
        <div className="login-container">
          <div className="already-have-an">Already have an account?</div>
          <div className="login1" onClick={onLoginTextClick}>
            Login
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container1">
          <div className="logo1">
            <div className="vector-group">
              <img className="frame-child24" alt="" src="/rectangle-1.svg" />
              <div className="frame-child25" />
              <div className="frame-child26" />
              <div className="frame-child27" />
            </div>
            <div className="secauth1">
              <b>Sec</b>
              <span className="auth1">auth</span>
            </div>
          </div>
          <div className="navlinkcontainer">
            <div className="navlink">
              <div className="navlink1">Get Started</div>
            </div>
            <div className="navlink2">
              <div className="navlink3">Pricing</div>
            </div>
            <div className="navlink4">
              <div className="navlink5">Documentation</div>
            </div>
            <div className="navlink6">
              <div className="navlink7">Contact us</div>
            </div>
          </div>
          <div className="button-parent">
            <div className="button2">
              <div className="button3">Login</div>
            </div>
            <div className="button4">
              <div className="button5">Register</div>
            </div>
          </div>
        </div>
        <div className="navbar-child" />
      </div>
    </div>
  );
};

export default Register;
