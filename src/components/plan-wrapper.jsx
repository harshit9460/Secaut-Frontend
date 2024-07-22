import { useMemo } from "react";
import PropTypes from "prop-types";
import "./plan-wrapper.css";

const PlanWrapper = ({
  className = "",
  free,
  pricePlaceholder,
  customizeTheLevelsOfSecur,
  customizeTheLevelsOfSecur1,
  propBoxShadow,
  propBorder,
  propBackgroundColor,
}) => {
  const planWrapperStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBoxShadow, propBorder, propBackgroundColor]);

  return (
    <div className={`plan-wrapper ${className}`} style={planWrapperStyle}>
      <button className="pricing-wrapper-tag">
        <div className="free">{free}</div>
      </button>
      <div className="secure-user-authentication4">
        Secure user authentication is the process of verifying the identity of a
        user before granting access to a system or application.
      </div>
      <div className="price-container">
        <div className="price-placeholder">{pricePlaceholder}</div>
        <div className="month">/month</div>
      </div>
      <div className="pricing-checklist">
        <div className="pricing-checklist-item">
          <img
            className="crosscheck-icon"
            loading="lazy"
            alt=""
            src="/crosscheck-icon@2x.png"
          />
          <div className="customize-the-levels">
            {customizeTheLevelsOfSecur}
          </div>
        </div>
        <div className="pricing-checklist-item1">
          <img
            className="crosscheck-icon1"
            loading="lazy"
            alt=""
            src="/crosscheck-icon@2x.png"
          />
          <div className="customize-the-levels1">
            {customizeTheLevelsOfSecur1}
          </div>
        </div>
        <div className="pricing-checklist-item2">
          <div className="crosscheck-icon2">
            <img
              className="multiply-icon"
              loading="lazy"
              alt=""
              src="/multiply@2x.png"
            />
          </div>
          <div className="customize-the-levels2">
            Customize the levels of security
          </div>
        </div>
      </div>
      <button className="plan-action">
        <div className="get-started">Get Started</div>
      </button>
    </div>
  );
};

PlanWrapper.propTypes = {
  className: PropTypes.string,
  free: PropTypes.string,
  pricePlaceholder: PropTypes.string,
  customizeTheLevelsOfSecur: PropTypes.string,
  customizeTheLevelsOfSecur1: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default PlanWrapper;
