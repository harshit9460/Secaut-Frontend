import { useMemo } from "react";
import PropTypes from "prop-types";
import "./nav-bar.css";

const NavBar = ({
  className = "",
  frameDivWidth,
  frameDivPosition,
  frameDivAlignSelf,
  frameDivTop,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      position: frameDivPosition,
      alignSelf: frameDivAlignSelf,
      top: frameDivTop,
    };
  }, [frameDivWidth, frameDivPosition, frameDivAlignSelf, frameDivTop]);

  return (
    <div className={`navbar1 ${className}`} style={navBarStyle}>
      <header className="container2">
        <div className="logo2">
          <div className="vector-container">
            <img
              className="frame-child32"
              loading="lazy"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="logo-shapes" />
            <div className="logo-shapes1" />
            <div className="logo-shapes2" />
          </div>
          <a className="secauth2">
            <b>Sec</b>
            <span className="auth2">auth</span>
          </a>
        </div>
        <nav className="navlinkcontainer1">
          <div className="navlink8">
            <a className="navlink9">Get Started</a>
          </div>
          <div className="navlink10">
            <a className="navlink11">Pricing</a>
          </div>
          <div className="navlink12">
            <a className="navlink13">Documentation</a>
          </div>
          <div className="navlink14">
            <a className="navlink15">Contact us</a>
          </div>
        </nav>
        <div className="auth-buttons">
          <button className="button20">
            <a className="button21">Login</a>
          </button>
          <button className="button22">
            <a className="button23">Register</a>
          </button>
        </div>
      </header>
      <div className="header-decoration" />
    </div>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.any,
  frameDivPosition: PropTypes.any,
  frameDivAlignSelf: PropTypes.any,
  frameDivTop: PropTypes.any,
};

export default NavBar;
