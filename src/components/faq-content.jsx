import PropTypes from "prop-types";
import "./faq-content.css";

const FaqContent = ({ className = "" }) => {
  return (
    <section className={`faq-content ${className}`}>
      <div className="faq-content-child" />
      <div className="faq-content-item" />
      <div className="title1">
        <div className="faq-list">
          <div className="faq-list-illustration">
            <img
              className="httpslottiefilescomanimat-icon2"
              alt=""
              src="/httpslottiefilescomanimationsfaqquestionillustrationanimationyvn6wqeupc@2x.png"
            />
          </div>
          <div className="faq-container">
            <h1 className="faqs">FAQs</h1>
            <div className="faq-list-item">
              <div className="question-container">
                <div className="what-is-secure">
                  What is secure user authentication?
                </div>
                <img
                  className="minus-icon"
                  loading="lazy"
                  alt=""
                  src="/minus@2x.png"
                />
              </div>
              <div className="answer-container">
                <div className="secure-user-authentication3">
                  Secure user authentication is the process of verifying the
                  identity of a user before granting access to a system or
                  application. It ensures that only authorized users can access
                  the resources, thereby protecting sensitive data from
                  unauthorized access.
                </div>
              </div>
            </div>
            <div className="faq-list-item1">
              <div className="faq-questions">
                <div className="what-is-secure1">
                  Why is secure user authentication important?
                </div>
                <img
                  className="plus-math-icon"
                  loading="lazy"
                  alt=""
                  src="/plus-math@2x.png"
                />
              </div>
            </div>
            <div className="faq-list-item2">
              <div className="what-is-secure-user-authentica-parent">
                <div className="what-is-secure2">
                  What authentication methods does your application support?
                </div>
                <img
                  className="plus-math-icon1"
                  loading="lazy"
                  alt=""
                  src="/plus-math@2x.png"
                />
              </div>
            </div>
            <div className="faq-list-item3">
              <div className="what-is-secure-user-authentica-group">
                <div className="what-is-secure3">
                  How does two-factor authentication (2FA) work?
                </div>
                <img
                  className="plus-math-icon2"
                  loading="lazy"
                  alt=""
                  src="/plus-math@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FaqContent.propTypes = {
  className: PropTypes.string,
};

export default FaqContent;
