import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import BR from "../../assets/brazil.png";
import * as S from "./selectStyles";

const Select = ({ optionValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setselectedImage] = useState(BR);
  const [selectedLanguage, setSelectedLanguage] = useState("pt-BR");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (id) => () => {
    const object_verify = optionValues;
    if (
      object_verify !== null &&
      object_verify !== undefined &&
      object_verify.length > 0
    ) {
      for (let i = 0; i < object_verify.length; i += 1) {
        if (id === object_verify[i].id) {
          setSelectedLanguage(object_verify[i].value);
          setselectedImage(object_verify[i].image);
          setIsOpen(false);
          break;
        }
      }
    }
  };

  const renderDropDown = (object) => {
    let renderDD;
    if (object !== null && object !== undefined && object.length > 0) {
      renderDD = (
        <S.DropDownList>
          {object.map((option) => (
            <S.ListItem onClick={onOptionClicked(option.id)} key={option.id}>
              <S.ListImage src={option.image} alt="country flag" />
            </S.ListItem>
          ))}
        </S.DropDownList>
      );
    } else {
      renderDD = <span>null</span>;
    }
    return renderDD;
  };

  return (
    <S.SelectStyled>
      <h3>
        <FormattedMessage id="select_title" />
      </h3>
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling}>
          <S.InitialImage src={selectedImage} alt="teste img" />
        </S.DropDownHeader>
        {isOpen && (
          <S.DropDownListContainer>
            {renderDropDown(optionValues)}
          </S.DropDownListContainer>
        )}
      </S.DropDownContainer>
    </S.SelectStyled>
  );
};

export default Select;
