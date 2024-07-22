import NavBar1 from "./nav-bar1";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`navbar-wrapper ${className}`}>
      <NavBar1 />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
