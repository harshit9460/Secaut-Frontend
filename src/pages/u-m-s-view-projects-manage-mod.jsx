import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import ProjectWrapperWeb1 from "../components/project-wrapper-web1";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import "./u-m-s-view-projects-manage-mod.css";

const UMSViewProjectsManageMod = () => {
  const navigate = useNavigate();

  const onDashboardLayoutIconClick = useCallback(() => {
    navigate("/ums-dashboard");
  }, [navigate]);

  const onCustomerSupportIconClick = useCallback(() => {
    navigate("/ums-technical-support");
  }, [navigate]);

  const onSettingsIconClick = useCallback(() => {
    navigate("/ums-settings-account");
  }, [navigate]);

  return (
    <div className="ums-view-projects-manage-mod">
      <div className="dashboard-navigation-parent5">
        <div className="dashboard-navigation7">
          <div className="dashboard-layout-frame">
            <img
              className="dashboard-layout-icon7"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="project-wrapper1">
            <img
              className="project-icon8"
              loading="lazy"
              alt=""
              src="/project11@2x.png"
            />
          </div>
          <div className="customer-support-wrapper1">
            <img
              className="customer-support-icon7"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="settings-wrapper2">
            <img
              className="settings-icon7"
              loading="lazy"
              alt=""
              src="/settings@2x.png"
              onClick={onSettingsIconClick}
            />
          </div>
        </div>
        <input className="frame-input6" type="checkbox" />
      </div>
      <section className="frame-parent3">
        <UserBar propTop="0" propPosition="sticky" />
        <div className="frame-parent4">
          <div className="frame-parent5">
            <div className="frame-wrapper3">
              <div className="your-projects-group">
                <h1 className="your-projects">Your Projects</h1>
                <div className="manage-all-users">
                  Manage all users of your application at one place
                </div>
              </div>
            </div>
            <div className="project-list-placeholder-wrapper">
              <h1 className="project-list-placeholder">+</h1>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="frame-wrapper4">
              <div className="project-wrapper-web-parent">
                <ProjectWrapperWeb1
                  productIcons="/product-icons@2x.png"
                  financeApp="Finance App"
                />
                <ProjectWrapperWeb1
                  productIcons="/product-icons-1@2x.png"
                  financeApp="Ecommerce app"
                />
                <div className="project-wrapper-web1">
                  <FrameComponent4
                    productIcons="/product-icons-2@2x.png"
                    financeApp="Vucoin Webapp"
                  />
                  <div className="frame-parent7">
                    <FrameComponent3 propMarginLeft="unset" />
                    <div className="next-arrow-wrapper">
                      <div className="next-arrow2">
                        <img
                          className="next-arrow-inner"
                          loading="lazy"
                          alt=""
                          src="/arrow-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-wrapper-web2">
                  <div className="next-arrow3">
                    <img
                      className="next-arrow-child1"
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </div>
                  <FrameComponent4
                    productIcons="/product-icons@2x.png"
                    financeApp="Finance App"
                    propMarginRight="unset"
                  />
                  <FrameComponent3 propMarginLeft="-76px" />
                </div>
              </div>
            </div>
            <img className="frame-child31" alt="" src="/frame-402.svg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSViewProjectsManageMod;
