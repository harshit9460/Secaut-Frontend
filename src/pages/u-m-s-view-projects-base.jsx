import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import YourProjects from "../components/your-projects";
import ProjectWrapperWeb from "../components/project-wrapper-web";
import FrameComponent3 from "../components/frame-component3";
import "./u-m-s-view-projects-base.css";

const UMSViewProjectsBase = () => {
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
    <div className="ums-view-projects-base">
      <div className="dashboard-navigation-group">
        <div className="dashboard-navigation1">
          <div className="dashboard-layout">
            <img
              className="dashboard-layout-icon1"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="project-container">
            <img
              className="project-icon2"
              loading="lazy"
              alt=""
              src="/project11@2x.png"
            />
          </div>
          <div className="dashboard-layout1">
            <img
              className="customer-support-icon1"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="dashboard-layout2">
            <img
              className="settings-icon1"
              loading="lazy"
              alt=""
              src="/settings@2x.png"
              onClick={onSettingsIconClick}
            />
          </div>
        </div>
        <input className="frame-input1" type="checkbox" />
      </div>
      <section className="profile-parent">
        <UserBar propTop="0" propPosition="sticky" />
        <div className="your-projects-parent">
          <YourProjects />
          <div className="projects-container">
            <div className="projects1">
              <div className="project-list1">
                <ProjectWrapperWeb
                  productIcons="/product-icons@2x.png"
                  financeApp="Finance App"
                />
                <ProjectWrapperWeb
                  productIcons="/product-icons-1@2x.png"
                  financeApp="Ecommerce app"
                />
                <ProjectWrapperWeb
                  productIcons="/product-icons-2@2x.png"
                  financeApp="Vucoin Webapp"
                />
                <div className="project-wrapper-web">
                  <div className="product-icons-parent">
                    <img
                      className="product-icons"
                      loading="lazy"
                      alt=""
                      src="/product-icons@2x.png"
                    />
                    <div className="finance-app-wrapper">
                      <h1 className="finance-app">Finance App</h1>
                    </div>
                    <div className="frame-wrapper">
                      <div className="take-control-of-your-finances-wrapper">
                        <div className="take-control-of">
                          Take control of your finances with our intuitive app –
                          where managing money is as easy as a swipe and a tap.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="next-arrow1">
                    <img
                      className="next-arrow-item"
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </div>
                  <FrameComponent3 />
                </div>
              </div>
            </div>
            <img
              className="projects-container-child"
              alt=""
              src="/frame-402.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSViewProjectsBase;
