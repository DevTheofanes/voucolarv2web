import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width:1500px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (max-width:780px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width:400px){
    grid-template-columns: 1fr;
  }
  `;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  padding: 1.6rem;
  padding-bottom: 0.8rem;
  border-radius: 0.25rem;

  @media (max-width:780px){
    padding: 1.2rem;
  }

  img{
    width: 16rem;
    height: 12rem;
    border-radius: 0.25rem;
  }

  @media (max-width:1500px){
    img{
      width: 20rem;
      height: 16rem;
    }
  }

  @media (max-width:1400px){
    img{
      width: 18rem;
      height: 14rem;
    }
  }

  @media (max-width:1300px){
    img{
      width: 16rem;
      height: 12rem;
    }
  }

  @media (max-width:1200px){
    img{
      width: 14rem;
      height: 10rem;
    }
  }

  @media (max-width:1000px){
    img{
      width: 12rem;
      height: 8rem;
    }
  }

  @media (max-width:900px){
    img{
      width: 10rem;
      height: 6rem;
    }
  }

  @media (max-width:780px){
    img{
      width: 14rem;
      height: 10rem;
    }
  }

  @media (max-width:650px){
    img{
      width: 12rem;
      height: 8rem;
    }
  }

  @media (max-width:580px){
    img{
      width: 11rem;
      height: 7rem;
    }
  }

  @media (max-width:530px){
    img{
      width: 10rem;
      height: 6rem;
    }
  }

  @media (max-width:490px){
    img{
      width: 9rem;
      height: 5rem;
    }
  }

  @media (max-width:450px){
    img{
      width: 8rem;
      height: 4rem;
    }
  }

  @media (max-width:400px){
    img{
      width: 16rem;
      height: 12rem;
    }
  }

  @media (max-width:380px){
    img{
      width: 14rem;
      height: 10rem;
    }
  }

  span{
    display: inline-block;
    margin: 0;
    margin-top: 0.8rem;
    max-width: 18rem;
    color: var(--text-title);
    font-weight: 500;
  }
`;