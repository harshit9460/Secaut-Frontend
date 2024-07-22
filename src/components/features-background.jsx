import BgPattern from "./bg-pattern";
import FeaturesSection from "./features-section";
import PropTypes from "prop-types";
import "./features-background.css";

const FeaturesBackground = ({ className = "" }) => {
  return (
    <section className={`features-background ${className}`}>
      <BgPattern />
      <FeaturesSection />
    </section>
  );
};

FeaturesBackground.propTypes = {
  className: PropTypes.string,
};

export default FeaturesBackground;
