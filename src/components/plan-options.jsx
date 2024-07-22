import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./plan-options.css";

const PlanOptions = ({
  className = "",
  propBackgroundColor,
  onPlanOptionsContainerClick1,
}) => {
  const planOptions1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const navigate = useNavigate();

  const onPlanOptionsContainerClick = useCallback(() => {
    navigate("/ums-settings-edit-payment-methods");
  }, [navigate]);

  return (
    <div
      className={`plan-options1 ${className}`}
      onClick={onPlanOptionsContainerClick1}
      style={planOptions1Style}
    >
      <div className="magnetic-card-parent">
        <input className="magnetic-card" type="checkbox" />
        <div className="edit-payment-methods-wrapper">
          <div className="edit-payment-methods">Edit Payment Methods</div>
        </div>
      </div>
      <div className="add-edit-or1">Add, Edit or delete payment methods.</div>
    </div>
  );
};

PlanOptions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,

  /** Action props */
  onPlanOptionsContainerClick1: PropTypes.func,
};

export default PlanOptions;
