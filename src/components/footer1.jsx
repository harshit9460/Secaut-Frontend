import PropTypes from "prop-types";
import "./footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="footer-content2">
        <div className="footer-brand-parent">
          <div className="footer-brand1">
            <div className="logo4">
              <div className="vector-parent2">
                <img
                  className="frame-child61"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1.svg"
                />
                <div className="footer-logo-shapes" />
                <div className="footer-logo-shapes1" />
                <div className="footer-logo-shapes2" />
              </div>
              <div className="secauth4">
                <b>Sec</b>
                <span className="auth4">auth</span>
              </div>
            </div>
            <div className="social-links1">
              <div className="follow-us-on1"> Follow us on</div>
              <div className="social-icons-container1">
                <div className="social-icons3">
                  <img
                    className="instagram-icon1"
                    loading="lazy"
                    alt=""
                    src="/instagram@2x.png"
                  />
                </div>
                <div className="social-icons4">
                  <img
                    className="dribbble-icon1"
                    loading="lazy"
                    alt=""
                    src="/dribbble@2x.png"
                  />
                </div>
                <div className="social-icons5">
                  <img
                    className="facebook-icon1"
                    loading="lazy"
                    alt=""
                    src="/facebook@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-columns3">
            <div className="footer-category3">
              <div className="services3">Services</div>
              <div className="footer-link3">
                <div className="link-title3">User Authentication</div>
              </div>
              <div className="fraud-protection3">Fraud Protection</div>
              <div className="user-management3">User Management</div>
              <div className="dashboard3">Dashboard</div>
            </div>
          </div>
          <div className="footer-columns4">
            <div className="footer-category4">
              <div className="services4">Help</div>
              <div className="footer-link4">
                <div className="link-title4">Privacy Policy</div>
              </div>
              <div className="fraud-protection4">FAQs</div>
              <div className="user-management4">Terms and condition</div>
              <div className="dashboard4">Technical Support</div>
            </div>
          </div>
          <div className="footer-columns5">
            <div className="footer-category5">
              <div className="services5">Contact</div>
              <div className="footer-link5">
                <a className="link-title5">Privacy Policy</a>
              </div>
              <div className="fraud-protection5">FAQs</div>
              <div className="user-management5">Terms and condition</div>
              <div className="dashboard5">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-rights-reserved-wrapper">
        <div className="all-rights-reserved1">© 2024 all rights reserved</div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
