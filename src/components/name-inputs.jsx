import PropTypes from "prop-types";
import "./name-inputs.css";

const NameInputs = ({
  className = "",
  name1,
  whatsYourName,
  name2,
  whatsYourName1,
}) => {
  return (
    <div className={`name-inputs ${className}`}>
      <div className="first-name-inputs">
        <div className="text-input12">
          <div className="first-name-input-labels">
            <div className="name12">{name1}</div>
            <div className="whats-your-name12">{whatsYourName}</div>
          </div>
          <div className="first-name-input-content">
            <div className="first-name-input-cursor-wrapper">
              <div className="first-name-input">!</div>
            </div>
          </div>
        </div>
        <div className="text-input13">
          <div className="last-name-input-labels">
            <div className="name13">{name2}</div>
            <div className="whats-your-name13">{whatsYourName1}</div>
          </div>
          <div className="last-name-input-content">
            <div className="last-name-input-cursor-wrapper">
              <div className="last-name-input">!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NameInputs.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  whatsYourName: PropTypes.string,
  name2: PropTypes.string,
  whatsYourName1: PropTypes.string,
};

export default NameInputs;
