import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 10rem;
  margin-bottom: 3.2rem;


  h3{
    border-top: 1px solid #eee;
    padding: 2rem 0;
    
    font-size: 1.25rem;
    font-weight: 500;
    color: #000;
  }

  @media (max-width:800px){
    display: none;
  };
`;

export const ContainerToPhone = styled.div`
  padding: 0 1rem;
  margin-bottom: 3.2rem;
  display: none;

  h3{
    border-top: 1px solid #eee;
    padding: 2rem 0;
    
    font-size: 1.25rem;
    font-weight: 500;
    color: #000;
  }

  @media (max-width:800px){
    display: block;
  };
`;

export const Product = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  

  h3{
    font-size: 0.875rem;
    font-weight: 300;
    color: #A0A0A0;
    border: none;
    /* max-width: ; */
    /* padding: 0; */
  }

  img{
    width: 8.75rem;
  }

  span{
    font-size: 1rem;
    font-weight: 400;
    color: #F29595;
  }

  strong{
    font-size: 1rem;
    font-weight: 600;
    color: #000;
  }

  /* @media (max-width:800px){
    h3 { 
      font-size: .6rem;
    }

    span{
      font-size: .75rem;
    }

    strong{
      font-size: .75rem;
    }
  } */
`;

export const ImagesPhone = styled.div`
  div{
    position: relative;
  }

  img { 
    width: 8.75rem !important;
    height: 15.5rem;
  }

  img + img {
    position: absolute;
    top: 0;
    right: 0;
  }

  
  @media (max-width:800px){
    img { 
      width: 8.2rem !important;
      height: 13.8rem;
    }
  }
`;


