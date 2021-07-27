import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/logo.svg";
import BR from "../../assets/brazil.png";
import EN from "../../assets/united-states.png";
import ES from "../../assets/spain.png";
import Select from "./../Select";
import * as S from "./appStyles";

function App() {
  return (
      <S.WrapperApp>
        <S.AppHeader>
          <Select
            optionValues={[
              { id: 0, value: "pt-BR", image: BR },
              { id: 1, value: "en-US", image: EN },
              { id: 2, value: "es-ES", image: ES },
            ]}
          />
          <S.AppLogo src={logo} alt="logo" />
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
