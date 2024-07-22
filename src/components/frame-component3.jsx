import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "", propMarginLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={`people-container-parent ${className}`}
      style={frameDivStyle}
    >
      <div className="people-container">
        <img
          className="people-icon3"
          loading="lazy"
          alt=""
          src="/people-2@2x.png"
        />
      </div>
      <div className="placeholder1">678,898</div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
};

export default FrameComponent3;
