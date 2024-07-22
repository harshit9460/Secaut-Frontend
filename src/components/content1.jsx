import PropTypes from "prop-types";
import "./content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <div className={`content4 ${className}`}>
      <div className="hero">
        <div className="hero-content1">
          <div className="hero-heading">
            <h1 className="choose-your-right-container">
              <span>{`Choose Your `}</span>
              <span className="right-plan">Right Plan!</span>
            </h1>
          </div>
          <div className="protect-your-platform1">
            Protect your platform with advanced fraud detection algorithms.
            Safeguard your users and your business with ease.
          </div>
        </div>
        <div className="plan-selection">
          <div className="plan-frame-slider">
            <button className="monthly-plan">
              <div className="monthly">Monthly</div>
            </button>
            <div className="yearly-plan">
              <div className="yearly-20-off">Yearly (20% off)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
