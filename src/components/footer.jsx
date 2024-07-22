import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <div className="footer-content1">
          <div className="footer-brand">
            <div className="logo3">
              <div className="logo-container">
                <img
                  className="logo-container-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-1.svg"
                />
                <div className="logo-shapes3" />
                <div className="logo-shapes4" />
                <div className="logo-shapes5" />
              </div>
              <div className="secauth3">
                <b>Sec</b>
                <span className="auth3">auth</span>
              </div>
            </div>
            <div className="social-links">
              <div className="follow-us-on"> Follow us on</div>
              <div className="social-icons-container">
                <div className="social-icons">
                  <img
                    className="instagram-icon"
                    loading="lazy"
                    alt=""
                    src="/instagram@2x.png"
                  />
                </div>
                <div className="social-icons1">
                  <img
                    className="dribbble-icon"
                    loading="lazy"
                    alt=""
                    src="/dribbble@2x.png"
                  />
                </div>
                <div className="social-icons2">
                  <img
                    className="facebook-icon"
                    loading="lazy"
                    alt=""
                    src="/facebook@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-columns">
            <div className="footer-category">
              <div className="services">Services</div>
              <div className="footer-link">
                <div className="link-title">User Authentication</div>
              </div>
              <div className="fraud-protection">Fraud Protection</div>
              <div className="user-management">User Management</div>
              <div className="dashboard">Dashboard</div>
            </div>
          </div>
          <div className="footer-columns1">
            <div className="footer-category1">
              <div className="services1">Help</div>
              <div className="footer-link1">
                <div className="link-title1">Privacy Policy</div>
              </div>
              <div className="fraud-protection1">FAQs</div>
              <div className="user-management1">Terms and condition</div>
              <div className="dashboard1">Technical Support</div>
            </div>
          </div>
          <div className="footer-columns2">
            <div className="footer-category2">
              <div className="services2">Contact</div>
              <div className="footer-link2">
                <div className="link-title2">Privacy Policy</div>
              </div>
              <div className="fraud-protection2">FAQs</div>
              <div className="user-management2">Terms and condition</div>
              <div className="dashboard2">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="all-rights-reserved">© 2024 all rights reserved</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
