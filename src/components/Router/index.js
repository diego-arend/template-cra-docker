import React from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./history";
import Main from "./../../pages/Main";
import UserInfo from './../../pages/UserInfo'

const BrowserRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user-info" component={UserInfo} />
      </Switch>
    </Router>
  );
};

export default BrowserRouter;
