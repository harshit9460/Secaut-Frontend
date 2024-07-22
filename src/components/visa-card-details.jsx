import { useMemo } from "react";
import PropTypes from "prop-types";
import "./visa-card-details.css";

const VisaCardDetails = ({
  className = "",
  visa,
  text5,
  text7,
  propFlex,
  propBackgroundColor,
  propAlignSelf,
}) => {
  const visaCardDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propBackgroundColor, propAlignSelf]);

  return (
    <div
      className={`visa-card-details ${className}`}
      style={visaCardDetailsStyle}
    >
      <div className="visa-card-icon-row">
        <img
          className="subtract-icon"
          loading="lazy"
          alt=""
          src="/subtract@2x.png"
        />
        <img className="visa-icon" loading="lazy" alt="" src={visa} />
      </div>
      <div className="visa-card-details-inner">
        <div className="text-5-parent">
          <b className="text-5">{text5}</b>
          <div className="frame-parent11">
            <div className="text-3-parent">
              <div className="text-3">Card holder name</div>
              <b className="text-6">John Carter</b>
            </div>
            <div className="text-2-parent">
              <div className="text-2">Expiry date</div>
              <div className="text-7-wrapper">
                <b className="text-7">{text7}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VisaCardDetails.propTypes = {
  className: PropTypes.string,
  visa: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default VisaCardDetails;
