import React from "react";
import { Link, useLocation } from "react-router-dom";

import { menuOptions } from "./const";

const LeftBar = ({ isMenuOpen }) => {
  const location = useLocation();
  console.log("location", location);
  return (
    isMenuOpen && (
      <div className="leftbar">
        <ul className="menu">
          {menuOptions.map((menu) => (
            <Link to={menu.path} key={menu.path}>
              <li
                className={`menu-item fs-16 ${
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
