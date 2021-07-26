import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1080px;

  @media screen and (max-width: 768px) {
    max-width: 100%;

    padding: 15px;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #A16695;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img{
    height: 2.5rem;
  }

  h1{
    text-align: center;
    text-transform: uppercase;
  }

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg+svg{
      margin-left: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  width: 100%;
  min-height: 632px;

  &.last-step {
    .casePreview {
      pointer-events: none;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: auto;
    flex-direction: column;

    &.preview-centered {
      margin-top: 1.875rem;
    }
  }

  @media screen and (min-width: 768px) {
    .casePreview {
      margin-left: 100px;
    }

    &.preview-centered {
      position: relative; 

      .casePreview {
        margin-left: 0px;
      }

      &.last-step {
        min-height: 664px;

        > div {
          &:first-child {
            top: 64px;
          }
        }
      }

      > div {
        &:first-child {
          position: absolute;

          width: 100%;

          top: 32px;

          display: flex;
          justify-content: center;

          z-index: -1;
        }
      }
    }
  }
`;

export const StepContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
`;

export const ButtonNext = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button{
    padding: 0.75rem 1.5rem;
    text-align: center;
    max-width: 9rem;
    background-color:#9D3DBF;
    font-size: 1.125rem;
    color: #fff;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-weight: 500;
    border: 0;
  }
`;

export const ButtonActions = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) { 
    margin-top: 16px;
  }
`;

export const ButtonAction = styled.button`
  padding: 0.75rem 1.5rem;
  max-width: 9rem;
  background-color: #9D3DBF;

  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  
  border: 0;
  border-radius: 0.25rem;

  transition: all 0.5s;

  &:hover {
    background-color: #781c98;
  }
`

export const ButtonNextLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  
  button{
    padding: 0.75rem 1.5rem;
    text-align: center;
    max-width: 9rem;
    background-color:#9D3DBF;
    font-size: 1.125rem;
    color: #fff;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-weight: 500;
    border: 0;
  }
`;

export const TextAndColor = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;

  input, select {
    height: 27px;
  }

  input[type=text] {
    width: 77.5%;
  }

  input[type=color] {
    width: 20%;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5625rem 0;
`;

export const ProgressBarItem = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  border: ${props => props.active ? 0 : "1px solid #D6D6D6"};
  background-color: ${props => props.active ? "#B88CAF" : "transparent"};
  padding: 0.625rem 0;
  width: 10.625rem;

  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    display: none;

    &.--isActive {
      display: flex;
    }
  }

  &:not(.--isActive) {
    &:hover {
      border: 1px solid #9d3dbf;
      background-color: #9d3dbf;

      cursor: pointer;

      strong, span {
        color: #fff;
      }
    }
  }
  
  strong{
    font-size: 1.25rem;
    color: ${props => props.active ? "#fff" : "#7D7D7D"};
  }

  span{
    color: ${props => props.active ? "#fff" : "#000"};
    font-size: 0.75rem;
  }
`;

export const CustomizeContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;

    margin-top: 16px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 500px;
  height: auto;
  max-height: 516px;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;

    width: 100%;
    max-height: 75px;
  }

  overflow-y: auto;

  @media screen and (max-width: 768px) { 
    overflow-y: initial;
    overflow-x: auto;
  }

  @media screen and (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #fff; 
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #C8C8C8; 
    }
  }
`;

export const ItemsTitle = styled.h2``;

export const ItemsWrapper = styled.div`
  display: flex;

  flex-direction: column;

  width: auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: 1.125rem;
    text-transform: uppercase;
    color: #707070;
    font-weight: bold;
    margin-bottom: 1.25rem;
  }
  
  form {
    &:not(.formText) {
      div:not(.items) {
        border: 1px solid #7D7D7D;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10rem;
        padding: 1rem 0;
        border-radius: 0.25rem;

        label{
          font-size: 1rem;
          font-weight: 500;
          color: #7D7D7D;
        }

        input[type="file"] {
          display: none;
        }
      }
    }
  }

  form {
    width: 500px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .formText{
    border: 1px solid #707070;
    height: auto;
    width: 500px;
    padding: 1.25rem;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    display: flex;
    flex-direction: column;

    input{
      padding: 0.25rem 0.5rem;
    }
  
    select{
      padding: 0.25rem 0.5rem;
      margin-top: 1.25rem;
      color: #707070;
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: #9D3DBF;
    
      color: #fff;
      font-size: 1rem;
      text-align: center;
      text-transform: uppercase;
      font-weight: 500;
      
      border: 0;
      border-radius: 0.25rem;
    
      transition: all 0.5s;
    
      &:hover {
        background-color: #781c98;
      }
    }
  }
`;

export const Item = styled.div`
  border: 0;
  background-color: transparent;

  position: relative;

  border: none;
  max-height: 250px;

  @media screen and (max-width: 768px) {
    max-height: 75px !important;

    img {
      max-height: 75px !important;
    }
  }

  cursor: pointer;

  &.--sticker {
    max-height: 100px;

    img {
      max-height: 100px;
    }
  }

  &.--photoPicker {
    position: relative;

    .--trigger {
      position: absolute;

      top: 0px;
      left: 0px;

      width: 100%;
      height: 100%;

      cursor: pointer;
    }
  }

  &::before {
    content: '';
  
    position: absolute;

    top: 0px;
    left: 0px;

    opacity: 0;
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.1);

    width: 100%;
    height: 100%;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  img {
    height: auto;
    max-height: 250px;
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: 0.5s all;

  margin-right: 16px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) { 
    margin-bottom: 0px;

    &:last-child {
      margin-right: 0px;
    }
  }

  .stickers {
    height: 10rem;
  }
`;
