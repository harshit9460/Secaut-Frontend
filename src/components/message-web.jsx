import { useMemo } from "react";
import PropTypes from "prop-types";
import "./message-web.css";

const MessageWeb = ({
  className = "",
  helloIHaveAnIssue,
  propHeight,
  propMinHeight,
}) => {
  const messageWebStyle = useMemo(() => {
    return {
      height: propHeight,
      minHeight: propMinHeight,
    };
  }, [propHeight, propMinHeight]);

  return (
    <div className={`message-web2 ${className}`} style={messageWebStyle}>
      <div className="message-content">
        <div className="hello-i-have-an-issue-wrapper">
          <div className="hello-i-have1">{helloIHaveAnIssue}</div>
        </div>
      </div>
      <div className="message-sender">
        <div className="message-sender-details">
          <div className="message-time-user">
            <div className="message-delivery">
              <div className="am2">11:30 AM</div>
            </div>
            <div className="you2">You</div>
          </div>
        </div>
        <img
          className="profile-3-icon"
          loading="lazy"
          alt=""
          src="/profile-3@2x.png"
        />
      </div>
    </div>
  );
};

MessageWeb.propTypes = {
  className: PropTypes.string,
  helloIHaveAnIssue: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default MessageWeb;
