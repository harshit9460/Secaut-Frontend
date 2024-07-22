import PropTypes from "prop-types";
import "./project-wrapper-web1.css";

const ProjectWrapperWeb1 = ({ className = "", productIcons, financeApp }) => {
  return (
    <div className={`project-wrapper-web4 ${className}`}>
      <div className="project-card-items">
        <img
          className="product-icons2"
          loading="lazy"
          alt=""
          src={productIcons}
        />
        <div className="finance-card-items">
          <div className="finance-card-buttons">
            <div className="close-wrapper">
              <img className="close-icon" alt="" src="/close@2x.png" />
            </div>
            <div className="finance-card-buttons-child" />
            <div className="edit-wrapper">
              <img className="edit-icon" alt="" src="/edit@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="finance-app-cards">
        <h1 className="finance-app2">{financeApp}</h1>
        <div className="finance-navigation-items">
          <div className="take-control-of2">
            Take control of your finances with our intuitive app – where
            managing money is as easy as a swipe and a tap.
          </div>
        </div>
      </div>
      <div className="people-cards">
        <div className="people-card-items">
          <div className="people-wrapper">
            <img
              className="people-icon4"
              loading="lazy"
              alt=""
              src="/people-2@2x.png"
            />
          </div>
          <div className="people-placeholder">678,898</div>
        </div>
        <div className="people-navigation-items">
          <div className="next-arrow7">
            <img
              className="next-arrow-child5"
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

ProjectWrapperWeb1.propTypes = {
  className: PropTypes.string,
  productIcons: PropTypes.string,
  financeApp: PropTypes.string,
};

export default ProjectWrapperWeb1;
