import styled from "styled-components";

export const ToDoItemStyles = styled.div.attrs((props: {isActive: boolean}) => props)`
  padding-left: 13px;
  background: ${props => props.isActive ? "#FFFFFF" : "#000000"};
  border: 2px solid ${props => props.isActive ? "#000000" : "#FFFFFF"};
  color: ${props => props.isActive ? "#000000" : "#FFFFFF"};
  border-radius: 15px;
  font-size: 14px;
  font-weight: 700;
  min-height: 26px;
  height: 26px;
  cursor: ${props => props.isActive ? "pointer" : "grab"};
  transition: 0.4s;
  margin-top: 6px;
  transform: translate(0, 0);

  .to-do-input-change {
    background: #ADADAD;
    padding-left: 13px;
    color: #FFFFFF;
    border-radius: 15px;
    font-size: 14px;
    border: none;
    font-weight: 700;
    min-height: 26px;
    height: 25px;
    cursor: pointer;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    margin-top: 0;
    width: 138px;
    margin-left: -15px;
    outline: none;
  }

  p {
    margin: 5px 0 0;
  }

  .to-do-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 6px 0 0;
    }
  }
`;