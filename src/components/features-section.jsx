import FeatureContainer from "./feature-container";
import PropTypes from "prop-types";
import "./features-section.css";

const FeaturesSection = ({ className = "" }) => {
  return (
    <div className={`features-section ${className}`}>
      <div className="features-title">
        <h1 className="features-we-provides">Features we provides</h1>
      </div>
      <div className="features-description">
        <div className="empower-your-applications">
          "Empower your applications with seamless user authentication. Our APIs
          handle it all, so you can focus on what matters most.
        </div>
      </div>
      <div className="vector-parent1">
        <img className="frame-child60" alt="" src="/arrow-3.svg" />
        <div className="see-more">See more</div>
      </div>
      <div className="feature-cards">
        <FeatureContainer secureUserAuthentication="Secure User Authentication" />
        <FeatureContainer secureUserAuthentication="Fraud Detection Algorithms" />
        <FeatureContainer secureUserAuthentication="Scalability and Reliability" />
      </div>
    </div>
  );
};

FeaturesSection.propTypes = {
  className: PropTypes.string,
};

export default FeaturesSection;
