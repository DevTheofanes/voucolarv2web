import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize } from 'polished';

// import 

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: var(--background-acess);
`;

export const Header = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  padding: 0 2.4rem;

  span{
    /* margin-right: 1rem; */
    color: #fff;
    font-size: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const LateralMenu = styled.div`
  width: 12%;
`;

export const ItemMenu = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border:0;
  background-color: transparent;
  padding: 0.72rem 0.5rem;
  margin-left: 0.4rem;

  @media (max-width:1100px){
    flex-direction: column;
  }


  @media (max-width:780px){
    padding: 1rem 0.75rem;
    span{
      display: none;
    }
    
  }

  cursor: pointer;

  span{
    color: #fff;
    margin-left: 0.4rem;
    font-size: 0.9rem;
  }
`;


export const Content = styled.div`
  background-color: #fff;
  width: 88%;
  height: 95vh;
  padding: 2.5rem;
  overflow:auto;
`;


export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;

  span{
    font-weight: 600;
    color: var(--background-acess);
    font-size: 1.75rem;
  }

  button{
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: var(--background-acess);
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;

    label {
      color: #fff;
      margin: 0;
      font-size: 0.875rem;
      cursor: pointer;
    }

    transition: filter 0.2s;

    &:hover{
      background-color: ${transparentize(0.1, "rgb(35, 40, 45)")};
    }
  }

`;

export const Grid = styled.div`
  margin-top: 1rem;
  /* width: 90%; */
  
`;

export const GridRow = styled.section`
  display:grid;
  grid-template-columns: 1fr 2fr 8fr 1.5fr;
  align-items: center;
  margin-top: 0.75rem;

  @media (max-width:1480px){
    grid-template-columns: 1fr 2fr 8fr 1.75fr;

  }

  @media (max-width:1280px){
    grid-template-columns: 1fr 2fr 7.5fr 2fr;
  }

  @media (max-width:1080px){
    grid-template-columns: 1fr 2fr 7fr 2.25fr;
  }

  @media (max-width:880px){
    grid-template-columns: 1fr 2fr 6.5fr 2.75fr;
  }

  @media (max-width:620px){
    h3:nth-last-child(3){
      display: none;
    }

    img{
      display: none;
    }

    grid-template-columns: 0.5fr 4fr 1.75fr !important;

    div{
      button{
        font-size: 0.5rem;
        max-width: 2.8rem;
        max-height: 1.4rem;
      }
    }
  }

  h3{
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }

  h3:last-child{
    text-align: center;
  }

  

  img{
    height:5.3125rem;
    max-width:5.3125rem;
  }

  span{
    color: #222;
    font-size: 0.875rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
      border: 0;
      border-radius: 8px;

      /* padding: 0.25rem 0.625rem; */
      width: 4.2rem;
      height: 2.2rem;

      background-color: #ffc107; 

      label{
        color: #fff;
        margin: 0;
      }
    }

    button + button {
      background-color: rgb(220, 53, 69);
      /* margin-left: 0.875rem; */
    }
  }
`;