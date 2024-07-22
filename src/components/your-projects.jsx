import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./your-projects.css";

const YourProjects = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/ums-view-projects-manage-mode");
  }, [navigate]);

  return (
    <div className={`your-projects1 ${className}`}>
      <div className="your-projects-description">
        <div className="your-projects-container">
          <h1 className="your-projects2">Your Projects</h1>
          <div className="manage-all-users2">
            Manage all users of your application at one place
          </div>
        </div>
      </div>
      <div className="manage-projects1">
        <div className="manage-projects-description">
          <h1 className="manage-title">+</h1>
        </div>
        <button
          className="manage-projects-wrapper"
          onClick={onFrameButtonClick}
        >
          <a className="manage-projects2">Manage Projects</a>
        </button>
      </div>
    </div>
  );
};

YourProjects.propTypes = {
  className: PropTypes.string,
};

export default YourProjects;
