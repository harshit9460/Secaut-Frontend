import { useMemo } from "react";
import PropTypes from "prop-types";
import "./plan-wrapper1.css";

const PlanWrapper1 = ({
  className = "",
  free,
  amount,
  subscribedCurrently,
  propBorder,
}) => {
  const planWrapper1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={`plan-wrapper2 ${className}`} style={planWrapper1Style}>
      <button className="pricing-wrapper-tag2">
        <div className="free2">{free}</div>
      </button>
      <div className="secure-user-authentication6">
        Secure user authentication is the process of verifying the identity of a
        user before granting access to a system or application.
      </div>
      <div className="price-container2">
        <div className="amount">{amount}</div>
        <h3 className="month2">/month</h3>
      </div>
      <div className="pricing-checklist2">
        <div className="pricing-checklist-item6">
          <img
            className="crosscheck-icon6"
            loading="lazy"
            alt=""
            src="/crosscheck-icon@2x.png"
          />
          <div className="customize-the-levels6">
            1000 API Request Per month
          </div>
        </div>
        <div className="pricing-checklist-item7">
          <img
            className="crosscheck-icon7"
            loading="lazy"
            alt=""
            src="/crosscheck-icon@2x.png"
          />
          <div className="customize-the-levels7">
            Total Products Created - 1
          </div>
        </div>
        <div className="pricing-checklist-item8">
          <div className="crosscheck-icon8">
            <img
              className="multiply-icon1"
              loading="lazy"
              alt=""
              src="/multiply@2x.png"
            />
          </div>
          <div className="customize-the-levels8">
            Customize the levels of security
          </div>
        </div>
      </div>
      <button className="subscription-buttons">
        <div className="subscribed-currently">{subscribedCurrently}</div>
      </button>
    </div>
  );
};

PlanWrapper1.propTypes = {
  className: PropTypes.string,
  free: PropTypes.string,
  amount: PropTypes.string,
  subscribedCurrently: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default PlanWrapper1;
