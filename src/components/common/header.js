import React from "react";

const Header = ({
  header,
  children,
  containerClass = "",
  headerClass = "",
}) => (
  <div className={containerClass}>
    <h2 className={`header text-center ${headerClass}`}>{header}</h2>
    {children}
  </div>
);

export default Header;
