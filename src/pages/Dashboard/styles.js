import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PersonalizeBox = styled.div`
  min-height: 23rem;
  background-image: url("https://voucolar.com.br/wp-content/uploads/2020/12/promocaonovascolecoes-scaled.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    opacity: 1 !important;
    color:#fff;
    font-size: 2.875rem;
    font-weight: 700;
    -webkit-text-stroke-width: 1.8px; /* largura da borda */
    -webkit-text-stroke-color: #FD8E00;
  }


  @media (max-width:600px){
    width: 100% !important;
    min-height: 15rem;

    h1{
      max-width: 12rem;
      text-align: center;
      font-size: 1.6rem;
      -webkit-text-stroke-width: 1px; 
    }
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 1rem 0;

  select {
    width: 36%;
    padding: 0 0.5rem;
    height: 2rem;
    border-radius: 0.25rem;
       
    border: 1px solid #c1c1c1;
    background-color: var(--shape);
    font-weight:400;
    font-size: 1rem; 
        
    &::placeholder{
      color: #c1c1c1;
    }
  }

  
  @media (max-width:600px){
    /* justify-content: flex-start; */

    .selectInHome{
      margin-top: 2rem;
    }

    margin: 0 0 2rem 0;
    select{
      width: 80%;
    }
  }

  
`;

export const ProductsList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width:600px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const Product = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  

  h3{
    font-size: 0.875rem;
    font-weight: 300;
    color: #A0A0A0;
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
`;

export const Button = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: var(--mainColor);
  border: 0;
  color: #fff;
  font-weight: 600;
`;