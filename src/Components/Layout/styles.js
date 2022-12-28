import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;


export const StyledMenu = styled.section`
  max-width: 400px;
  width: 40%;
  height: 100vh;

  padding: 48px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;


  @media only screen and (max-width: 912px) {
    width: 50%;
  }
  @media only screen and (max-width: 781px) {
    width: 100%;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    align-items: center;
  }
`;