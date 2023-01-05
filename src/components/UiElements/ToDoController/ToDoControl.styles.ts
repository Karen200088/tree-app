import styled from "styled-components";

export const ToDoControlStyles = styled.div`
  margin-top: 10px;
  
  .addToDoListBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 800;
    color: white;
    height: 28px;
    cursor: pointer;
    transition: 0.4s;
    width: 100%;
    margin-bottom: 8px;
    &:hover {
      background: #FFFFFF;
      border-color: #000000;
      color: #000000;
    }
  }
 

`;