import PlanWrapper from "./plan-wrapper";
import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`pricing-plans-wrapper ${className}`}>
      <div className="pricing-plans">
        <PlanWrapper
          free="Free"
          pricePlaceholder="$0"
          customizeTheLevelsOfSecur="1000 API Request Per month"
          customizeTheLevelsOfSecur1="Total Products Created - 1"
        />
        <PlanWrapper
          free="Premium"
          pricePlaceholder="$999"
          customizeTheLevelsOfSecur="Unlimited API Request Per month"
          customizeTheLevelsOfSecur1="Total Products Created - 2"
          propBoxShadow="0px 4px 84.9px rgba(60, 98, 235, 0.26)"
          propBorder="2px solid #1c1c1f"
          propBackgroundColor="#1c1c1f"
        />
        <div className="plan-wrapper1">
          <button className="pricing-wrapper-tag1">
            <div className="free1">Commercial</div>
          </button>
          <div className="secure-user-authentication5">
            Secure user authentication is the process of verifying the identity
            of a user before granting access to a system or application.
          </div>
          <div className="price-container1">
            <div className="div9">$3000</div>
            <div className="month1">/month</div>
          </div>
          <div className="pricing-checklist1">
            <div className="pricing-checklist-item3">
              <img
                className="crosscheck-icon3"
                loading="lazy"
                alt=""
                src="/crosscheck-icon@2x.png"
              />
              <div className="customize-the-levels3">
                Unlimited API Request Per month
              </div>
            </div>
            <div className="pricing-checklist-item4">
              <img
                className="crosscheck-icon4"
                loading="lazy"
                alt=""
                src="/crosscheck-icon@2x.png"
              />
              <div className="customize-the-levels4">
                Total Products Created - 10
              </div>
            </div>
            <div className="pricing-checklist-item5">
              <img
                className="crosscheck-icon5"
                loading="lazy"
                alt=""
                src="/crosscheck-icon@2x.png"
              />
              <div className="customize-the-levels5">
                Customize the levels of security
              </div>
            </div>
          </div>
          <button className="get-started-wrapper">
            <div className="get-started1">Get Started</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
