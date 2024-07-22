import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./user-bar.css";

const UserBar = ({ className = "", propTop, propPosition }) => {
  const userBarStyle = useMemo(() => {
    return {
      top: propTop,
      position: propPosition,
    };
  }, [propTop, propPosition]);

  const navigate = useNavigate();

  const onProfileWrapperContainerClick = useCallback(() => {
    navigate("/ums-settings-account");
  }, [navigate]);

  return (
    <div className={`user-bar ${className}`} style={userBarStyle}>
      <div className="profile">
        <div className="divider" />
      </div>
      <div className="profile-wrapper" onClick={onProfileWrapperContainerClick}>
        <img
          className="joseph-gonzalez-ifgrcqhznqg-un-icon1"
          alt=""
          src="/josephgonzalezifgrcqhznqgunsplash-1-1@2x.png"
        />
        <div className="user-name">
          <a className="james-colin">James Colin</a>
        </div>
        <div className="dropdown">
          <img
            className="chevron-down-icon"
            alt=""
            src="/chevron-down@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

UserBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propPosition: PropTypes.any,
};

export default UserBar;
