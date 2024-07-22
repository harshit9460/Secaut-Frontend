import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import PlanOptions1 from "../components/plan-options1";
import PlanOptions from "../components/plan-options";
import NameInputs from "../components/name-inputs";
import "./u-m-s-settings-account.css";

const UMSSettingsAccount = () => {
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
    <div className="ums-settings-account">
      <div className="dashboard-navigation-parent1">
        <div className="dashboard-navigation3">
          <div className="dashboard-layout-container">
            <img
              className="dashboard-layout-icon3"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="project-frame">
            <img
              className="project-icon4"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="customer-support-frame">
            <img
              className="customer-support-icon3"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="settings-container">
            <img
              className="settings-icon3"
              loading="lazy"
              alt=""
              src="/settings1@2x.png"
            />
          </div>
        </div>
        <input className="frame-input3" type="checkbox" />
      </div>
      <section className="frame-section">
        <UserBar propTop="unset" propPosition="unset" />
        <div className="settings-panel-wrapper">
          <div className="settings-panel">
            <div className="settings-options-panel">
              <input
                className="settings-options-panel-child"
                placeholder="Settings"
                type="text"
              />
              <div className="settings-list-parent">
                <div className="settings-list">
                  <div className="account-settings">
                    <img
                      className="admin-settings-male"
                      loading="lazy"
                      alt=""
                      src="/admin-settings-male@2x.png"
                    />
                    <div className="account-wrapper">
                      <a className="account">Account</a>
                    </div>
                  </div>
                  <div className="update-your-account">
                    Update your account and manage it with ease.
                  </div>
                </div>
                <div className="plan-options-parent">
                  <PlanOptions1
                    change="/change@2x.png"
                    changeCurrentPlan="Change current plan"
                    youCanChangeYourCurrentPl="You can change your current plan with other plans."
                  />
                  <PlanOptions
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
            <div className="settings-panel-inner">
              <div className="frame-child29" />
            </div>
            <div className="account-details">
              <div className="account-inputs">
                <div className="account-header">
                  <a className="account1">Account</a>
                </div>
                <NameInputs
                  name1="First name"
                  whatsYourName="James "
                  name2="Last name"
                  whatsYourName1="Colin"
                />
                <div className="photo-wrapper">
                  <div className="photo">Photo</div>
                </div>
                <div className="profile-image-wrapper-wrapper">
                  <div className="profile-image-wrapper">
                    <div className="profile-image-container">
                      <div className="profile-image-input">
                        <img
                          className="joseph-gonzalez-ifgrcqhznqg-un-icon"
                          loading="lazy"
                          alt=""
                          src="/josephgonzalezifgrcqhznqgunsplash-1-1-1@2x.png"
                        />
                        <div className="button-container">
                          <button className="button6">
                            <div className="button7">Change</div>
                          </button>
                        </div>
                        <div className="remove-wrapper">
                          <div className="remove">Remove</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-input4">
                      <div className="name-input-content">
                        <div className="name4">Country</div>
                        <div className="whats-your-name4">United States</div>
                      </div>
                      <div className="text-input-inner2">
                        <div className="name-input-cursor-wrapper">
                          <div className="name-input-cursor">!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NameInputs
                  name1="Email Address"
                  whatsYourName="xlongclaw@gmail.com"
                  name2="Gender"
                  whatsYourName1="Male"
                />
                <div className="email-input">
                  <div className="text-input5">
                    <div className="email-label">
                      <div className="name5">Date of Birth</div>
                      <div className="whats-your-name5">01/01/01</div>
                    </div>
                    <div className="text-input-inner3">
                      <div className="email-input-cursor-wrapper">
                        <div className="email-input-cursor">!</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-separator">
                  <div className="input-separator-child" />
                </div>
                <div className="account-inputs-inner">
                  <div className="button-group">
                    <button className="button8">
                      <div className="button9">Cancel</div>
                    </button>
                    <button className="button10">
                      <div className="button11">Save</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSSettingsAccount;
