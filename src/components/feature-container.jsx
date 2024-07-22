import PropTypes from "prop-types";
import "./feature-container.css";

const FeatureContainer = ({ className = "", secureUserAuthentication }) => {
  return (
    <div className={`feature-container ${className}`}>
      <div className="rectangle-group">
        <div className="frame-child33" />
        <div className="frame-child34" />
        <div className="frame-child35" />
        <div className="frame-child36" />
        <div className="frame-child37" />
        <div className="frame-child38" />
        <div className="frame-child39" />
        <div className="frame-child40" />
        <div className="frame-child41" />
        <div className="frame-child42" />
        <div className="frame-child43" />
        <div className="frame-child44" />
        <div className="frame-child45" />
        <div className="frame-child46" />
        <div className="frame-child47" />
        <div className="frame-child48" />
        <div className="frame-child49" />
        <div className="frame-child50" />
        <div className="frame-child51" />
        <div className="frame-child52" />
        <div className="frame-child53" />
        <div className="frame-child54" />
        <div className="frame-child55" />
        <div className="frame-child56" />
        <div className="frame-child57" />
        <div className="frame-child58" />
        <div className="frame-child59" />
      </div>
      <div className="card-titles">
        <h3 className="secure-user-authentication2">
          {secureUserAuthentication}
        </h3>
        <div className="seamless-integration-of-container">
          <ul className="seamless-integration-of-robust">
            <li>
              Seamless integration of robust authentication mechanisms via our
              APIs.
            </li>
          </ul>
        </div>
        <div className="eliminates-the-need-container">
          <ul className="eliminates-the-need-for-client">
            <li>
              Eliminates the need for clients to build authentication systems
              from scratch
            </li>
          </ul>
        </div>
      </div>
      <div className="card-buttons">
        <div className="next-arrow5">
          <img
            className="next-arrow-child3"
            loading="lazy"
            alt=""
            src="/arrow-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

FeatureContainer.propTypes = {
  className: PropTypes.string,
  secureUserAuthentication: PropTypes.string,
};

export default FeatureContainer;
