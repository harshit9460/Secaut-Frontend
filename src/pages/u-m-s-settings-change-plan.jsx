import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import PlanOptions1 from "../components/plan-options1";
import PlanOptions from "../components/plan-options";
import PlanWrapper1 from "../components/plan-wrapper1";
import "./u-m-s-settings-change-plan.css";

const UMSSettingsChangePlan = () => {
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
    <div className="ums-settings-change-plan">
      <div className="dashboard-navigation-parent2">
        <div className="dashboard-navigation4">
          <div className="navigation-names">
            <img
              className="dashboard-layout-icon4"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="navigation-names1">
            <img
              className="project-icon5"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="navigation-names2">
            <img
              className="customer-support-icon4"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="settings-frame">
            <img
              className="settings-icon4"
              loading="lazy"
              alt=""
              src="/settings1@2x.png"
            />
          </div>
        </div>
        <input className="frame-input4" type="checkbox" />
      </div>
      <section className="profile-content-parent">
        <UserBar propTop="unset" propPosition="unset" />
        <div className="options-content-wrapper">
          <div className="options-content">
            <div className="settings-options-panel1">
              <input
                className="settings-options-panel-item"
                placeholder="Settings"
                type="text"
              />
              <div className="account-management">
                <PlanOptions1
                  change="/admin-settings-male@2x.png"
                  changeCurrentPlan="Account"
                  youCanChangeYourCurrentPl="Update your account and manage it with ease."
                  propBackgroundColor="#fff"
                />
                <div className="plan-management">
                  <PlanOptions1
                    change="/change@2x.png"
                    changeCurrentPlan="Change current plan"
                    youCanChangeYourCurrentPl="You can change your current plan with other plans."
                    propBackgroundColor="#ecf0f5"
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
                    propBackgroundColor="#fff"
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
            <div className="plan-separator">
              <div className="separator" />
            </div>
            <div className="plan-details">
              <div className="plan-title">
                <h1 className="change-current-plan">Change current Plan</h1>
                <div className="plan-description">
                  <div className="you-can-change">
                    You can change your current plan with other plans.
                  </div>
                  <div className="plan-options-wrapper">
                    <PlanWrapper1
                      free="Free"
                      amount="$0"
                      subscribedCurrently="Subscribed Currently"
                    />
                    <PlanWrapper1
                      free="Premium"
                      amount="$999"
                      subscribedCurrently="Get Started"
                      propBorder="2px solid #ecf0f5"
                    />
                    <PlanWrapper1
                      free="Commercial"
                      amount="$3000"
                      subscribedCurrently="Get Started"
                      propBorder="2px solid #ecf0f5"
                    />
                  </div>
                </div>
                <div className="change-plan-button">
                  <button className="button12">
                    <div className="button13">Change Plan</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSSettingsChangePlan;
