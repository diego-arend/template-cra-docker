import React, { useState, useContext } from "react";
import { SettingsContext } from "../../context/settings";
import BR from "../../assets/brazil.png";
import * as S from "./selectStyles";

const Select = ({ optionValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(BR);
  const [settingsLocale, setSettingsLocale] = useContext(SettingsContext);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (id, object) => () => {
    const values = object;
    if (values !== null && values !== undefined && values.length > 0) {
      for (let i = 0; i < values.length; i += 1) {
        if (id === values[i].id) {
          setSettingsLocale({locale: values[i].value});
          setSelectedImage(values[i].image);
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
            <S.ListItem
              onClick={onOptionClicked(option.id, optionValues)}
              key={option.id}
            >
              <S.ListImage src={option.image} alt="country flag" />
              <span>{option.value}</span>
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
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling}>
          <S.InitialImage src={selectedImage} alt="teste img" />
          <span>{settingsLocale.locale}</span>
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
