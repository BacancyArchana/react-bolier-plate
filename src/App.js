import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import { menuOptions } from "./layout/menu";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {menuOptions.map(({ path, Component }) => (
          <Route exact key={path} path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Layout>
  </Router>
);

export default App;
