import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./hero-content.css";

const HeroContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCallToActionClick = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <section className={`hero-content ${className}`}>
      <div className="hero-description">
        <div className="protect-your-platform">
          Protect your platform with advanced fraud detection algorithms.
          Safeguard your users and your business with ease. Stop fraud in its
          tracks with our cutting-edge algorithms. Rest easy knowing your users
          are safe and secure.
        </div>
        <div className="call-to-action" onClick={onCallToActionClick}>
          <div className="view-pricing-button">
            <img
              className="tags-icon"
              loading="lazy"
              alt=""
              src="/tags@2x.png"
            />
          </div>
          <div className="pricing-button">
            <div className="view-pricing">View Pricing</div>
          </div>
          <div className="next-arrow4">
            <img
              className="next-arrow-child2"
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
