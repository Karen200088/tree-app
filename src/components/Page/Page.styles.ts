import styled from "styled-components";

export const PageStyles = styled.div`

  .page-wrapper {
    width: 152px;
    min-height: 38px;
    border-radius: 10px;
    padding: 15px 13px 10px 13px;
    cursor: pointer;
    position: relative;
    margin: 25px auto 45px;
  }

  .pageActive {
    background: #000000;
    border: 2px solid #FFFFFF;

    .page-title {
      color: #FFFFFF;
    }
  }
  
  .pageNotActive {
    background: #FFFFFF;
    border: 2px solid #000000;

    .page-title {
      color: #000000;
    }
  }

  .page-title {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  .to-do-input {
    background: #ADADAD;
    padding-left: 13px;
    color: #FFFFFF;
    border-radius: 15px;
    font-size: 14px;
    border: none;
    font-weight: 700;
    min-height: 26px;
    cursor: pointer;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    margin-top: 0;
    width: 138px;
    margin-left: 0;
    outline: none;
  }


  float: left;
  position: relative;
  padding: 20px 5px 0 5px;
  transition: all 0.5s;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #000000;
    width: 50%;
    height: 45px;
  }

  &::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #000000;
  }

  &:only-child::after, &:only-child::before {
    display: none;
  }

  &:only-child {
    padding-top: 0;
  }

  &:first-child::before, &:last-child::after {
    border: 0 none;
  }

  &:last-child::before {
    border-right: 2px solid #000000;
    border-radius: 0 7px 0 0;
  }

  &:first-child::after {
    border-radius: 7px 0 0 0;
  }

  .parent-component::before {
    content: '';
    position: absolute;
    left: 50%;
    border-left: 2px solid #000000;
    width: 0;
    height: 75px;
    bottom: -74px;
  }

  .many-child-component::before {
    content: '';
    position: absolute;
    left: 50%;
    border-left: 2px solid #000000;
    width: 0;
    height: 45px;
    bottom: -48px;
  }

  .not-child-component::before {
    display: none;
  }

`;