import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  @media only screen and (max-width: 781px) {
    width: 100%;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
  }

`;

export const StyledList = styled.ul`
  padding: 8px;
  margin: 48px 0px;

  @media only screen and (max-width: 1000px) {
    margin: 0px;
    padding: 0px;
  }


  button {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    letter-spacing: 3px;

    color: ${({ theme }) => theme.textColorOptions};

    @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }

  .first-option {
    background: ${({button, theme }) => button ? "transparent" : theme.primaryColor};
  }

  .second-option {
    background: ${({button, theme }) => button ? theme.primaryColor : "transparent"};
  }


  li {
    width: 100%;
    padding: 8px 24px 8px 8px;
    margin: 8px 0px;

    display: flex;
    align-items: center;
    transition: all 0.5s;
    border-radius: 8px;

    @media only screen and (max-width: 1000px) {
    padding: 8px 16px;
  }
    @media only screen and (max-width: 500px) {
    padding: 8px 32px;
  }


    div {
      width: 32px;
      height: 32px;
      background: ${({ theme }) => theme.primaryColor};
      border-radius: 8px;
      margin-right: 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 920px) {
        display: none;
      }
      @media only screen and (max-width: 500px) {
        display: flex;
      }


    }

    &:hover {
      border-radius: 8px;
      transform: scale(1.05);
    }
  }
}
`;

export const ThemeContainer = styled.div`
  width: 94%;
  background: ${({theme }) => theme.backgroundNeutral};
  border-radius: 8px;
  padding: 16px 24px 16px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.textColorOptions};
    font-size: 16px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 24px;
    width: 100%;
  }
`;