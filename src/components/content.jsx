import NavBar from "./nav-bar";
import PropTypes from "prop-types";
import "./content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content3 ${className}`}>
      <NavBar />
      <div className="seamless-user-authentication-wrapper">
        <div className="seamless-user-authentication">
          SEAMLESS USER AUTHENTICATION
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
