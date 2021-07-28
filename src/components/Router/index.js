import React, { lazy, Suspense } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { history } from "./history";
import NotFound from "./../../pages/NotFound";

const routes = [
  // App
  {
    path: "/",
    Component: lazy(() => import("./../../pages/Main")),
    exact: true,
  },
  //UserInfo
  {
    path: "/user-info",
    Component: lazy(() => import("./../../pages/UserInfo")),
    exact: true,
  },
  //NotFound
  {
    path: "*",
    Component: lazy(() => import("./../../pages/NotFound")),
    exact: false,
  },
];

const BrowserRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, Component, exact }) => (
          <Route
            path={path}
            key={path}
            exact={exact}
            render={() => {
              return (
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              );
            }}
          />
        ))}
        {/* <Redirect to={NotFound} /> */}
      </Switch>
    </Router>
  );
};

// const BrowserRouter = () => {
//   return (
//     <Router history={history}>
//       <Switch>
//       <Route exact path="/" component={Main} />} />
//         <Route exact path="/user-info" component={UserInfo} />
//         <Route path="*" component={NotFound} />
//       </Switch>
//     </Router>
//   );
// };

export default BrowserRouter;
