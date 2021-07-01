import React from "react";
import { Link, useLocation } from "react-router-dom";

import { menuOptions } from "./menu";

const LeftBar = ({ isMenuOpen }) => {
  const location = useLocation();
  return (
    isMenuOpen && (
      <div className="leftbar">
        <ul className="menu">
          {menuOptions.map((menu) => (
            <Link to={menu.path} key={menu.path}>
              <li
                className={`menu-item fs-18 ${
                  menu.path === location.pathname ? "menu-item--active" : ""
                }`}
              >
                {menu.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  );
};

export default LeftBar;
