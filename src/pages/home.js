import React from "react";
import { useHistory } from "react-router-dom";

import Container from "../components/common/container";
import { menuOptions } from "../layout/menu";

const Home = () => {
  const history = useHistory();
  const componentList = menuOptions.filter((menu) => menu.isComponent);
  return (
    <Container>
      <h2 className="header text-primary my-20">React Components</h2>
      <div className="bg-white d-flex align-items-center border-4 border-left border-primary p-20">
        <ul className="text-primary w-100">
          {componentList.map((component) => (
            <li
              key={component.path}
              className="fs-16 m-10 p-10 cursor-pointer bg-primary-light--hover text-white--hover"
              onClick={() => {
                history.push(component.path);
              }}
            >
              <div className="fs-20 fw-600">{component.label}</div>
              <div>{component.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Home;
