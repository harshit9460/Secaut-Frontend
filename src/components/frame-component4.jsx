import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({
  className = "",
  productIcons,
  financeApp,
  propMarginRight,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      marginRight: propMarginRight,
    };
  }, [propMarginRight]);

  return (
    <div className={`frame-parent13 ${className}`} style={frameDiv1Style}>
      <div className="product-icons-group">
        <img
          className="product-icons3"
          loading="lazy"
          alt=""
          src={productIcons}
        />
        <div className="frame-wrapper5">
          <div className="frame-parent14">
            <div className="close-container">
              <img className="close-icon1" alt="" src="/close@2x.png" />
            </div>
            <div className="line-div" />
            <div className="edit-container">
              <img className="edit-icon1" alt="" src="/edit@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="finance-app-container">
        <h1 className="finance-app3">{financeApp}</h1>
      </div>
      <div className="finance-description-wrapper-wrapper">
        <div className="finance-description-wrapper">
          <div className="take-control-of3">
            Take control of your finances with our intuitive app – where
            managing money is as easy as a swipe and a tap.
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  productIcons: PropTypes.string,
  financeApp: PropTypes.string,

  /** Style props */
  propMarginRight: PropTypes.any,
};

export default FrameComponent4;
