import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";

import { menuOptions } from "./layout/const";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {menuOptions.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
