import styled from "styled-components";


export const StyledTaskContainer = styled.section`
  max-width: 800px;
  width: 60%;

  padding: 48px ;

  height: 95vh;
  margin-top: 5vh;
  margin-right: 48px;
  background: ${({ theme }) => theme.backgroundNeutral};

  border-radius: 45px 45px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .addTaskField {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    gap: 16px;

    button {
    font-size: 24px;
    color: #FFF;
    padding: 8px 16px;
    border-radius: 8px;
    background: ${({theme }) => theme.primaryColor};
    box-shadow: 0px 8px 50px rgba(154, 82, 255, 0.5);
    border: none;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 8px 50px rgba(154, 82, 255, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }
  }
  }

  .filter-container {
    width: 100%;
    padding: 0px 16px;
  }

  .clean-list {
    width: 100%;
    padding: 0px 18px;
    margin-top: 16px;


    button {
      background: ${({theme }) => theme.primaryColor};
      border: 1px solid ${({theme }) => theme.primaryColor};
      border-radius: 8px;
      padding: 6px 16px;
      outline: none;
      color: ${({theme }) => theme.textColorOptions};
      font-size: 14px;
      letter-spacing: 1.3px;
      transition: all 0.3s;

      &:hover {
        background-color: transparent;
        transform: scale(1.05);
    }

      &:active {
        transform: scale(0.98);
      }

    }
  }
`;


export const ListTasksContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  margin-top: 8px;
  overflow-y: scroll;


  &::-webkit-scrollbar {
    width: 15px;
    background-color: ${({theme }) => theme.backgroundColor};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.primaryColor};
      border-radius: 4px;
  }

  .empty-list {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 24px;
      color: ${({theme }) => theme.textColorOptions};
      opacity: 0.5;
      letter-spacing: 1.5px;
    }
  }
`;

export const ItemList = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  background-color: ${( props ) => props.currentColor};
  border-radius: 15px;

  margin: 16px 0px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  div {
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-right: 16px;
    margin-top: 8px;

    span {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      a:active{
        transform: scale(0.95);
      }
    }
  }
`;
