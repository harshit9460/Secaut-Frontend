import { useMemo } from "react";
import PropTypes from "prop-types";
import "./mastercard-card.css";

const MastercardCard = ({
  className = "",
  text5,
  propAlignSelf,
  propFlexDirection,
  propFlex,
  propMinWidth,
  propMinHeight,
}) => {
  const mastercardCardStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
      flex: propFlex,
      minWidth: propMinWidth,
      minHeight: propMinHeight,
    };
  }, [propAlignSelf, propFlexDirection, propFlex, propMinWidth, propMinHeight]);

  return (
    <div className={`mastercard-card ${className}`} style={mastercardCardStyle}>
      <div className="mastercard-content">
        <div className="mastercard-icon-row">
          <img
            className="subtract-icon1"
            loading="lazy"
            alt=""
            src="/subtract@2x.png"
          />
          <img
            className="mastercard-icon"
            loading="lazy"
            alt=""
            src="/mastercard.svg"
          />
        </div>
        <div className="mastercard-content-inner">
          <div className="text-5-group">
            <b className="text-51">{text5}</b>
            <div className="frame-parent12">
              <div className="text-3-group">
                <div className="text-31">Card holder name</div>
                <b className="text-61">John Carter</b>
              </div>
              <div className="text-2-group">
                <div className="text-21">Expiry date</div>
                <div className="mastercard-expiry">
                  <b className="mastercard-c-v">08/26</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MastercardCard.propTypes = {
  className: PropTypes.string,
  text5: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default MastercardCard;
