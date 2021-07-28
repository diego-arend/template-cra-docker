import React, { Fragment } from "react";
import GlobalStyles from "./../../globalStyles";
import App from './../../components/App'

const Main = () => {
  console.log("call main")
  return (
    <Fragment>
      <App />
      <GlobalStyles />
    </Fragment>
  );
};

export default Main;
