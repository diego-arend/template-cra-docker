import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/logo.svg";
import * as S from "./appStyles";

function App() {
  return (
    <S.WrapperApp>
      <S.AppHeader>
        <S.AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <FormattedMessage id="hello_world" values={{ teste_value: 2 }} />
        </p>
        <S.AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.AppLink>
      </S.AppHeader>
    </S.WrapperApp>
  );
}

export default App;
