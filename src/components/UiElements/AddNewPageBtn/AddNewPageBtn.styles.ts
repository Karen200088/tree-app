import styled from "styled-components";

export const AddNewPageBtnStyles = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px black solid;
  border-radius: 50px;
  width: 24px;
  height: 24px;
  font-size: 20px;
  color: black;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 2px;
  right: 0;
  bottom: -40px;
  
  &:hover {
    background: black;
    color: white;
  }
`;