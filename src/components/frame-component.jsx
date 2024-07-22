import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`contact-content-parent ${className}`}>
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-title">
            <h1 className="contact-us">Contact Us</h1>
          </div>
          <div className="need-any-help">
            Need any help or support for anything, We provide 24x7 assistance to
            our customers
          </div>
        </div>
      </div>
      <div className="form">
        <div className="input-fields">
          <div className="text-input6">
            <div className="input-containers1">
              <div className="name-fields">
                <div className="name6">{`Name `}</div>
                <div className="name-field-separator-container">
                  <span>{` `}</span>
                  <span className="span">*</span>
                </div>
              </div>
              <div className="whats-your-name6">What’s your name?</div>
            </div>
            <div className="wrapper2">
              <div className="div4">!</div>
            </div>
          </div>
          <div className="text-input7">
            <div className="frame-parent8">
              <div className="name-parent1">
                <div className="name7">Email</div>
                <div className="div5">
                  <span>{` `}</span>
                  <span className="span1">*</span>
                </div>
              </div>
              <div className="whats-your-name7">What’s your Email?</div>
            </div>
            <div className="wrapper3">
              <div className="div6">!</div>
            </div>
          </div>
          <div className="text-input8">
            <div className="name-parent2">
              <div className="name8">Phone</div>
              <div className="whats-your-name8">
                What’s your Contact number?
              </div>
            </div>
            <div className="wrapper4">
              <div className="div7">!</div>
            </div>
          </div>
          <div className="text-input9">
            <div className="name-parent3">
              <div className="name9">Message</div>
              <div className="whats-your-name9">
                Elaborate the difficulty you are facing for which need help.
              </div>
            </div>
            <div className="wrapper5">
              <div className="div8">!</div>
            </div>
          </div>
          <button className="button24">
            <div className="button25">Send Message</div>
          </button>
        </div>
        <div className="contact-illustration">
          <div className="illustration-container">
            <div className="wrapper-rectangle-38">
              <img
                className="wrapper-rectangle-38-child"
                loading="lazy"
                alt=""
                src="/rectangle-38.svg"
              />
            </div>
            <img
              className="httpslottiefilescomanimat-icon3"
              alt=""
              src="/httpslottiefilescomanimationscontactzkfpousjrz@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
