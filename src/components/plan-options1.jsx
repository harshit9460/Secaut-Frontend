import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./plan-options1.css";

const PlanOptions1 = ({
  className = "",
  change,
  changeCurrentPlan,
  youCanChangeYourCurrentPl,
  propBackgroundColor,
}) => {
  const planOptionsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const navigate = useNavigate();

  const onPlanOptionsContainerClick = useCallback(() => {
    navigate("/ums-settings-change-plan");
  }, [navigate]);

  return (
    <div
      className={`plan-options ${className}`}
      onClick={onPlanOptionsContainerClick}
      style={planOptionsStyle}
    >
      <div className="change-plan-options">
        <img className="change-icon" loading="lazy" alt="" src={change} />
        <div className="plan-option-descriptions">
          <div className="change-current-plan1">{changeCurrentPlan}</div>
        </div>
      </div>
      <div className="you-can-change1">{youCanChangeYourCurrentPl}</div>
    </div>
  );
};

PlanOptions1.propTypes = {
  className: PropTypes.string,
  change: PropTypes.string,
  changeCurrentPlan: PropTypes.string,
  youCanChangeYourCurrentPl: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default PlanOptions1;
