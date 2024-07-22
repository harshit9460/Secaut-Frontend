import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import Greetings from "../components/greetings";
import ProjectWrapperWeb from "../components/project-wrapper-web";
import "./u-m-s-dashboard.css";

const UMSDashboard = () => {
  const navigate = useNavigate();

  const onProjectIconClick = useCallback(() => {
    navigate("/ums-view-projects-base");
  }, [navigate]);

  const onCustomerSupportIconClick = useCallback(() => {
    navigate("/ums-technical-support");
  }, [navigate]);

  const onSettingsIconClick = useCallback(() => {
    navigate("/ums-settings-account");
  }, [navigate]);

  const onProjectTitleClick = useCallback(() => {
    navigate("/ums-view-projects-manage-mode");
  }, [navigate]);

  return (
    <div className="ums-dashboard">
      <div className="dashboard-navigation-parent">
        <div className="dashboard-navigation">
          <div className="dashboard-layout-wrapper">
            <img
              className="dashboard-layout-icon"
              loading="lazy"
              alt=""
              src="/dashboard-layout@2x.png"
            />
          </div>
          <div className="project-wrapper">
            <img
              className="project-icon"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="customer-support-wrapper">
            <img
              className="customer-support-icon"
              loading="lazy"
              alt=""
              src="/customer-support@2x.png"
              onClick={onCustomerSupportIconClick}
            />
          </div>
          <div className="settings-wrapper">
            <img
              className="settings-icon"
              loading="lazy"
              alt=""
              src="/settings@2x.png"
              onClick={onSettingsIconClick}
            />
          </div>
        </div>
        <input className="frame-input" type="checkbox" />
      </div>
      <section className="content1">
        <UserBar />
        <div className="summary">
          <Greetings />
          <div className="project-management">
            <div className="projects">
              <button className="project-title" onClick={onProjectTitleClick}>
                <a className="manage-projects">Manage Projects</a>
              </button>
              <div className="project-list">
                <div className="list-header">
                  <div className="header-content">
                    <div className="top-projects">
                      <div className="title-placeholder">
                        <img
                          className="project-icon1"
                          alt=""
                          src="/project1@2x.png"
                        />
                      </div>
                      <div className="title">
                        <div className="your-top-projects">
                          Your Top Projects
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="next-arrow">
                    <img
                      className="next-arrow-child"
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </div>
                </div>
                <div className="project-cards">
                  <ProjectWrapperWeb
                    productIcons="/product-icons@2x.png"
                    financeApp="Finance App"
                  />
                  <ProjectWrapperWeb
                    productIcons="/product-icons-1@2x.png"
                    financeApp="Ecommerce app"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSDashboard;
