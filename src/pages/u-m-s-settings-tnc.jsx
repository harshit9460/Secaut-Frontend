import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import PlanOptions1 from "../components/plan-options1";
import PlanOptions from "../components/plan-options";
import "./u-m-s-settings-tnc.css";

const UMSSettingsTnc = () => {
  const navigate = useNavigate();

  const onPlanOptionsContainerClick = useCallback(() => {
    navigate("/ums-settings-edit-payment-methods");
  }, [navigate]);

  const onDashboardLayoutIconClick = useCallback(() => {
    navigate("/ums-dashboard");
  }, [navigate]);

  const onProjectIconClick = useCallback(() => {
    navigate("/ums-view-projects-base");
  }, [navigate]);

  const onCustomerSupportIconClick = useCallback(() => {
    navigate("/ums-technical-support");
  }, [navigate]);

  return (
    <div className="ums-settings-tnc">
      <div className="dashboard-navigation-parent4">
        <div className="dashboard-navigation6">
          <div className="navigation-items3">
            <img
              className="dashboard-layout-icon6"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="navigation-items4">
            <img
              className="project-icon7"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="navigation-items5">
            <img
              className="customer-support-icon6"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="user">
            <img
              className="settings-icon6"
              loading="lazy"
              alt=""
              src="/settings1@2x.png"
            />
          </div>
        </div>
        <input className="logout" type="checkbox" />
      </div>
      <section className="content2">
        <UserBar propTop="unset" propPosition="unset" />
        <div className="settings-panel1">
          <div className="settings-content">
            <div className="settings-options-panel3">
              <input
                className="settings-title"
                placeholder="Settings"
                type="text"
              />
              <div className="settings-options">
                <PlanOptions1
                  change="/admin-settings-male@2x.png"
                  changeCurrentPlan="Account"
                  youCanChangeYourCurrentPl="Update your account and manage it with ease."
                  propBackgroundColor="#fff"
                />
                <div className="plan-management1">
                  <PlanOptions1
                    change="/change@2x.png"
                    changeCurrentPlan="Change current plan"
                    youCanChangeYourCurrentPl="You can change your current plan with other plans."
                    propBackgroundColor="#fff"
                  />
                  <PlanOptions
                    propBackgroundColor="#fff"
                    onPlanOptionsContainerClick1={onPlanOptionsContainerClick}
                  />
                  <PlanOptions1
                    change="/cancel@2x.png"
                    changeCurrentPlan="Cancel Plan"
                    youCanChangeYourCurrentPl="Cancel your plan anytime with no additional charges."
                    propBackgroundColor="#fff"
                  />
                  <PlanOptions1
                    change="/rules-book@2x.png"
                    changeCurrentPlan="Terms and conditions"
                    youCanChangeYourCurrentPl="All our terms and condition to use Secauth."
                    propBackgroundColor="#ecf0f5"
                  />
                  <PlanOptions1
                    change="/faq@2x.png"
                    changeCurrentPlan="FAQ"
                    youCanChangeYourCurrentPl="Check questions and solutions for the questions frequently asked by the users."
                    propBackgroundColor="#fff"
                  />
                </div>
              </div>
            </div>
            <div className="settings-content-inner">
              <div className="frame-child30" />
            </div>
            <div className="terms">
              <div className="terms-content">
                <div className="terms-and-conditions-parent">
                  <h1 className="terms-and-conditions">Terms and conditions</h1>
                  <div className="all-our-terms">
                    All our terms and condition to use Secauth.
                  </div>
                </div>
                <div className="terms-icons">
                  <div className="terms-icons-child" />
                  <div className="terms-icons-item" />
                  <div className="terms-icons-inner" />
                  <div className="terms-icons-child1" />
                  <div className="terms-icons-child2" />
                  <div className="terms-icons-child3" />
                </div>
                <div className="terms-details">
                  <div className="details-icons" />
                  <div className="details-icons1" />
                  <div className="details-icons2" />
                  <div className="details-icons3" />
                  <div className="details-icons4" />
                  <div className="details-icons5" />
                  <div className="details-icons6" />
                  <div className="details-icons7" />
                  <div className="details-icons8" />
                  <div className="details-icons9" />
                  <div className="details-icons10" />
                  <div className="details-icons11" />
                  <div className="details-icons12" />
                  <div className="details-icons13" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSSettingsTnc;
