import React from "react";

const Header = ({ isMenuOpen, toggleMenu }) => (
  <div className="h-100 d-flex align-items-center">
    {isMenuOpen && (
      <div className="hamburger-menu header text-primary-dark">Menu</div>
    )}
    <span
      className="hamburger-menu-icon fs-30"
      onClick={() => toggleMenu(!isMenuOpen)}
    >
      &#8801;
    </span>
    <h1 className="header text-primary-dark text-center mx-auto">
      React Common Components
    </h1>
  </div>
);

export default Header;
