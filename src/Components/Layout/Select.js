import styled from "styled-components";


export const Select = styled.select`
  max-width: 320px;
  width: 35%;
  height: 50px;
  border-radius: 15px;
  background-color: ${({theme }) => theme.backgroundColor};
  color: ${({theme }) => theme.textColorOptions};
  border: none;
  padding: 0px 16px;

  font-size: 16px;
  font-weight: 500;

  margin: 8px 0px;

  &:focus {
    outline: 2px solid ${({theme }) => theme.primaryColor};
  }
`;