import PropTypes from "prop-types";
import "./bg-pattern.css";

const BgPattern = ({ className = "" }) => {
  return (
    <div className={`bg-pattern ${className}`}>
      <div className="pattern-shapes" />
      <div className="pattern-shapes1" />
      <div className="pattern-shapes2" />
      <div className="pattern-shapes3" />
      <div className="pattern-shapes4" />
      <div className="pattern-shapes5" />
      <div className="pattern-shapes6" />
      <div className="pattern-shapes7" />
      <div className="pattern-shapes8" />
      <div className="pattern-shapes9" />
      <div className="pattern-shapes10" />
      <div className="pattern-shapes11" />
      <div className="pattern-shapes12" />
      <div className="pattern-shapes13" />
      <div className="network-shapes" />
      <div className="network-shapes1" />
      <div className="network-shapes2" />
      <div className="network-shapes3" />
      <div className="network-shapes4" />
      <div className="network-shapes5" />
      <div className="network-shapes6" />
      <div className="pattern-shapes14" />
      <div className="pattern-shapes15" />
      <div className="search-overlay" />
    </div>
  );
};

BgPattern.propTypes = {
  className: PropTypes.string,
};

export default BgPattern;
