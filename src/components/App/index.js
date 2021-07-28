import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "./../../assets/logo.svg";
import Select from "./../../components/Select";
import {localeOptions} from "./../../constants/listconstants"
import * as S from "./appStyles";

const App = () => {

    return (
        <S.WrapperApp>
          <S.AppHeader>
            <Select
              optionValues={localeOptions}
            />
            <S.AppLogo src={logo} alt="logo" />
            <p>
              <FormattedMessage
                id="hello_world"
                values={{ teste_value: "<props test>" }}
              />
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

export default App
