import styled from "styled-components";

export const SelectStyled = styled.div``;

export const DropDownContainer = styled.div`
  width: 3em;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div`
  margin-bottom: 0.1em;
  padding: 0.1em;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 1.7rem;
  color: #3faffa;
  background: #282c34;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  position: absolute;
  z-index: 100;
  width: 3em;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding: 0.5em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.1em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;
export const InitialImage = styled.img`
  height: 3em;
  width: 3em;
`;

export const ListImage = styled.img`
  height: 4em;
  width: 4em;
`;
