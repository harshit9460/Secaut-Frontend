import PropTypes from "prop-types";
import "./project-wrapper-web.css";

const ProjectWrapperWeb = ({ className = "", productIcons, financeApp }) => {
  return (
    <div className={`project-wrapper-web3 ${className}`}>
      <div className="card">
        <img
          className="product-icons1"
          loading="lazy"
          alt=""
          src={productIcons}
        />
        <div className="card1">
          <h1 className="finance-app1">{financeApp}</h1>
        </div>
        <div className="card2">
          <div className="descriptions">
            <div className="take-control-of1">
              Take control of your finances with our intuitive app – where
              managing money is as easy as a swipe and a tap.
            </div>
          </div>
        </div>
      </div>
      <div className="card3">
        <div className="user-actions">
          <div className="people-icons">
            <img
              className="people-icon2"
              loading="lazy"
              alt=""
              src="/people-2@2x.png"
            />
          </div>
          <div className="separator2">678,898</div>
        </div>
        <div className="next-arrow-container">
          <div className="next-arrow6">
            <img
              className="next-arrow-child4"
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectWrapperWeb.propTypes = {
  className: PropTypes.string,
  productIcons: PropTypes.string,
  financeApp: PropTypes.string,
};

export default ProjectWrapperWeb;
