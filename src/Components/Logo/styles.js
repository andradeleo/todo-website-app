import styled from "styled-components";

export const LogoTitle = styled.h1`
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 700;

  color: ${({ theme }) => theme.textColorLogo};
`;

export const StyledLogo = styled.span`
  background-image: linear-gradient(-45deg, #AF5DFF, #D972FF, #9A52FF );
  color: black;
  background-clip: text;
  -webkit-background-clip: text;

  /* Adicionado: */
  -webkit-text-fill-color: transparent;
`;

export const StyledSubTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;

  color: ${({ theme }) => theme.textColorLogo};
`;
