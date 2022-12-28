import styled from "styled-components";


export const StyledInput = styled.input`
  max-width: ${({tamanho}) => tamanho ? tamanho : null };
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: ${({theme }) => theme.inputColor};
  color: ${({theme }) => theme.textColorOptions};
  border: none;
  padding: 8px 16px;

  margin: 8px 0px;

  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: 2px solid ${({theme }) => theme.primaryColor};
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #d9d9d9;
    opacity: 0.7;
  }

  @media only screen and (max-width: 500px) {
    margin: 0px;
  }
  @media only screen and (max-width: 820px) {
    margin: 0px;
  }
`;