import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import PlanOptions1 from "../components/plan-options1";
import PlanOptions from "../components/plan-options";
import VisaCardDetails from "../components/visa-card-details";
import MastercardCard from "../components/mastercard-card";
import "./u-m-s-settings-edit-payment-me.css";

const UMSSettingsEditPaymentMe = () => {
  const navigate = useNavigate();

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
    <div className="ums-settings-edit-payment-me">
      <div className="dashboard-navigation-parent3">
        <div className="dashboard-navigation5">
          <div className="navigation-items">
            <img
              className="dashboard-layout-icon5"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="navigation-items1">
            <img
              className="project-icon6"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="navigation-items2">
            <img
              className="customer-support-icon5"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="settings-wrapper1">
            <img
              className="settings-icon5"
              loading="lazy"
              alt=""
              src="/settings1@2x.png"
            />
          </div>
        </div>
        <input className="frame-input5" type="checkbox" />
      </div>
      <section className="profile-content-group">
        <UserBar propTop="unset" propPosition="unset" />
        <div className="frame-wrapper2">
          <div className="settings-options-panel-parent">
            <div className="settings-options-panel2">
              <input
                className="settings-options-panel-inner"
                placeholder="Settings"
                type="text"
              />
              <div className="account-details-parent">
                <PlanOptions1
                  change="/admin-settings-male@2x.png"
                  changeCurrentPlan="Account"
                  youCanChangeYourCurrentPl="Update your account and manage it with ease."
                  propBackgroundColor="#fff"
                />
                <div className="plan-options-group">
                  <PlanOptions1
                    change="/change@2x.png"
                    changeCurrentPlan="Change current plan"
                    youCanChangeYourCurrentPl="You can change your current plan with other plans."
                    propBackgroundColor="#fff"
                  />
                  <PlanOptions propBackgroundColor="#ecf0f5" />
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
            <div className="separator1">
              <div className="separator-child" />
            </div>
            <div className="payment-content-wrapper">
              <div className="payment-content">
                <div className="payment-details">
                  <div className="payment-header">
                    <div className="payment-header-content">
                      <h1 className="manage-payment-methods">
                        Manage Payment Methods
                      </h1>
                      <div className="add-edit-or">
                        {" "}
                        Add, Edit or delete payment methods.
                      </div>
                    </div>
                    <button className="button14">
                      <div className="button15">+ Add</div>
                    </button>
                  </div>
                  <div className="visa-card-parent">
                    <div className="visa-card">
                      <div className="visa-card-content">
                        <div className="visa-card-content-child" />
                        <VisaCardDetails
                          visa="/visa.svg"
                          text5="3455 4562 7710 3507"
                          text7="02/30"
                        />
                      </div>
                      <MastercardCard text5="7832 2846 9171 8166" />
                    </div>
                    <div className="card-rows">
                      <VisaCardDetails
                        visa="/mastercard.svg"
                        text5="7832 2846 9171 8166"
                        text7="08/26"
                        propFlex="unset"
                        propBackgroundColor="unset"
                        propAlignSelf="stretch"
                      />
                      <div className="add-card-row">
                        <h1 className="add-card-icon">+</h1>
                        <div className="add-new-card-wrapper">
                          <h2 className="add-new-card">Add new card</h2>
                        </div>
                      </div>
                    </div>
                    <MastercardCard
                      text5="8926 2862 8290 1086"
                      propAlignSelf="unset"
                      propFlexDirection="column"
                      propFlex="1"
                      propMinWidth="241px"
                      propMinHeight="426px"
                    />
                  </div>
                </div>
                <div className="payment-methods">
                  <div className="payment-methods-footer">
                    <div className="footer-separator" />
                  </div>
                  <div className="footer-buttons">
                    <button className="button16">
                      <div className="button17">Detete Card</div>
                    </button>
                    <button className="button18">
                      <div className="button19">Edit Card details</div>
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

export default UMSSettingsEditPaymentMe;
