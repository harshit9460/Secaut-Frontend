import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./nav-bar1.css";

const NavBar1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAuthButtonsContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={`navbar2 ${className}`}>
      <div className="container3">
        <div className="logo5">
          <div className="vector-parent3">
            <img
              className="frame-child62"
              loading="lazy"
              alt=""
              src="/rectangle-1.svg"
            />
            <div className="logo-shapes6" />
            <div className="logo-shapes7" />
            <div className="logo-shapes8" />
          </div>
          <a className="secauth5">
            <b>Sec</b>
            <span className="auth5">auth</span>
          </a>
        </div>
        <nav className="navlinkcontainer2">
          <div className="navlink16">
            <a className="navlink17">Get Started</a>
          </div>
          <div className="navlink18">
            <a className="navlink19">Pricing</a>
          </div>
          <div className="navlink20">
            <a className="navlink21">Documentation</a>
          </div>
          <div className="navlink22">
            <a className="navlink23">Contact us</a>
          </div>
        </nav>
        <div className="auth-buttons1" onClick={onAuthButtonsContainerClick}>
          <button className="button26">
            <a className="button27">Login</a>
          </button>
          <button className="button28">
            <a className="button29">Register</a>
          </button>
        </div>
      </div>
      <div className="nav-separator" />
    </div>
  );
};

NavBar1.propTypes = {
  className: PropTypes.string,
};

export default NavBar1;
