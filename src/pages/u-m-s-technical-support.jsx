import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserBar from "../components/user-bar";
import MessageWeb from "../components/message-web";
import "./u-m-s-technical-support.css";

const UMSTechnicalSupport = () => {
  const navigate = useNavigate();

  const onDashboardLayoutIconClick = useCallback(() => {
    navigate("/ums-dashboard");
  }, [navigate]);

  const onProjectIconClick = useCallback(() => {
    navigate("/ums-view-projects-base");
  }, [navigate]);

  const onSettingsIconClick = useCallback(() => {
    navigate("/ums-settings-account");
  }, [navigate]);

  return (
    <div className="ums-technical-support">
      <div className="dashboard-navigation-container">
        <div className="dashboard-navigation2">
          <div className="navigation-instances">
            <img
              className="dashboard-layout-icon2"
              loading="lazy"
              alt=""
              src="/dashboard-layout1@2x.png"
              onClick={onDashboardLayoutIconClick}
            />
          </div>
          <div className="navigation-instances1">
            <img
              className="project-icon3"
              loading="lazy"
              alt=""
              src="/project@2x.png"
              onClick={onProjectIconClick}
            />
          </div>
          <div className="customer-support-container">
            <img
              className="customer-support-icon2"
              loading="lazy"
              alt=""
              src="/customer-support1@2x.png"
            />
          </div>
          <div className="navigation-instances2">
            <img
              className="settings-icon2"
              loading="lazy"
              alt=""
              src="/settings@2x.png"
              onClick={onSettingsIconClick}
            />
          </div>
        </div>
        <input className="frame-input2" type="checkbox" />
      </div>
      <section className="frame-group">
        <UserBar propTop="unset" propPosition="unset" />
        <div className="frame-container">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="httpslottiefilescomanimat-wrapper">
                <img
                  className="httpslottiefilescomanimat-icon1"
                  loading="lazy"
                  alt=""
                  src="/httpslottiefilescomanimationssupportr0e0wiersm@2x.png"
                />
              </div>
              <div className="chat-title-parent">
                <div className="chat-title">
                  <div className="technical-support">Technical Support</div>
                </div>
                <div className="chat-with-our">Chat with our Support Team</div>
                <div className="frame-wrapper1">
                  <div className="time-parent">
                    <img
                      className="time-icon"
                      loading="lazy"
                      alt=""
                      src="/time@2x.png"
                    />
                    <div className="x7-wrapper">
                      <b className="x7">24x7</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="frame-child28" alt="" src="/frame-403.svg" />
          </div>
          <div className="chat-messages">
            <div className="user-message-content-parent">
              <div className="user-message-content">
                <div className="user-message-bubble">
                  <div className="user-message-details">
                    <div className="user-message-details-child" />
                    <img
                      className="user-icon"
                      loading="lazy"
                      alt=""
                      src="/user@2x.png"
                    />
                  </div>
                  <div className="user-message-name-wrapper">
                    <div className="user-message-name">
                      <a className="james-smith">James Smith</a>
                      <div className="technical-support-secauth">
                        Technical Support @Secauth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-divider">
                <div className="message-divider-child" />
              </div>
              <div className="chat-history">
                <div className="messages">
                  <MessageWeb helloIHaveAnIssue="Hello, I have an issue." />
                  <div className="user-message">
                    <div className="message-web">
                      <div className="user-message-content1">
                        <div className="hello-i-have">
                          Hello, I am James Smith from Technical Support. What’s
                          the issue you are facing.
                        </div>
                      </div>
                      <div className="user-message-details1">
                        <div className="message-background-parent">
                          <div className="message-background" />
                          <img
                            className="user-icon1"
                            loading="lazy"
                            alt=""
                            src="/user-1@2x.png"
                          />
                        </div>
                        <div className="message-sender-info">
                          <div className="you">You</div>
                          <div className="am">11:30 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MessageWeb
                    helloIHaveAnIssue="I am adding user to the app but it’s not working."
                    propHeight="unset"
                    propMinHeight="74px"
                  />
                </div>
              </div>
              <div className="chat-history-instance">
                <div className="chat-messages1">
                  <div className="user-message1">
                    <div className="message-web1">
                      <div className="user-message-content2">
                        <div className="hello-i-have-container">
                          <p className="as-it-is">
                            As it is visible in the screenshot that the total
                            user registered in the app are more than 1M.
                          </p>
                          <p className="as-per-your">{`As per your current plan, there is a user limit on 1M, that’s why you are facing the issue. `}</p>
                          <p className="upgrade-your-plan">{`Upgrade your plan to Commercial to add users without limits. `}</p>
                        </div>
                      </div>
                      <div className="user-message-details2">
                        <div className="message-background-group">
                          <div className="message-background1" />
                          <img
                            className="user-icon2"
                            loading="lazy"
                            alt=""
                            src="/user-1@2x.png"
                          />
                        </div>
                        <div className="message-sender-info1">
                          <div className="you1">You</div>
                          <div className="am1">11:30 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MessageWeb
                    helloIHaveAnIssue="OK ! Thanks for the help."
                    propHeight="74px"
                    propMinHeight="unset"
                  />
                </div>
              </div>
            </div>
            <footer className="new-message-input-parent">
              <div className="new-message-input">
                <div className="type-your-message">Type your message</div>
              </div>
              <div className="new-message-actions">
                <div className="actions">
                  <img
                    className="microphone-icon"
                    loading="lazy"
                    alt=""
                    src="/microphone@2x.png"
                  />
                </div>
                <div className="actions1">
                  <img
                    className="attach-icon"
                    loading="lazy"
                    alt=""
                    src="/attach@2x.png"
                  />
                </div>
                <div className="message-button">
                  <img
                    className="message-button-child"
                    loading="lazy"
                    alt=""
                    src="/group-88@2x.png"
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMSTechnicalSupport;
