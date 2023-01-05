import styled from "styled-components";

export const DeletePageBtnStyles = styled.img`
  display: flex;
  justify-content: center;
  border: 2px black solid;
  border-radius: 50px;
  width: 13px;
  height: 13px;
  font-size: 20px;
  color: black;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: white;
  margin: 0 auto;
  position: absolute;
  right: -12px;
  top: -12px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;