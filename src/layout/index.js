import React, { useState } from "react";
import Header from "./header";
import LeftBar from "./leftbar";

const Layout = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(true);
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item-col-2 border-3 border-bottom border-primary">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div>
          <LeftBar isMenuOpen={isMenuOpen} />
        </div>
        <div className={!isMenuOpen ? "grid-item-col-2" : ""}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
