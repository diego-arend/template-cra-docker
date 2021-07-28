// import React, { lazy, Suspense } from "react";
import React from "react";
import { Router, Route, Switch } from "react-router";
import Main from "./pages/Main";
import UserInfo from "./pages/UserInfo";
import NotFound from "./pages/NotFound";

// const routes = [
//   // App
//   {
//     path: "/",
//     Component: lazy(() => import("./pages/Main")),
//     exact: true,
//   },
//   //UserInfo
//   {
//     path: "/user-info",
//     Component: lazy(() => import("./pages/UserInfo")),
//     exact: true,
//   },
//   //NotFound
//   {
//     path: "*",
//     Component: lazy(() => import("./pages/NotFound")),
//     exact: false,
//   },
// ];

// const BrowserRouter = ({history}) => {
//   return (
//     <Router history={history}>
//       <Switch>
//         {routes.map(({ path, Component, exact }) => (
//           <Route
//             path={path}
//             key={path}
//             exact={exact}
//             render={() => {
//               return (
//                 <Suspense fallback={null}>
//                   <Component />
//                 </Suspense>
//               );
//             }}
//           />
//         ))}
//       </Switch>
//     </Router>
//   );
// };

const BrowserRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user-info" component={UserInfo} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default BrowserRouter;
