import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 0 8.75rem;
  height: 1.875rem;
  
  background-color: var(--mainColor);

  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* max-width: 1140px; */

  @media (max-width:1480px){
    padding: 0 6rem;
  }

  @media (max-width:1380px){
    padding: 0 4.3525rem;
  }

  @media (max-width:1280px){
    padding: 0 3.65rem;
  }

  @media (max-width:1080px){
    padding: 0 2rem;
  }

  @media (max-width:880px){
    padding: 0 1.5rem;
  }

`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 200;
  font-size: 0.8125rem;
  
  @media (max-width:600px){
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  margin-left: 0.5rem;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-left: 1px solid #eee;
  padding-left: 0.275rem;

  display: flex;
  align-items: center;

  span{
    margin-left: 0.275rem;
    font-weight: 200;
    color: #fff;
    font-size: 0.8125rem;
  }

  @media (max-width:600px){
    span{
      font-size: 0.8rem;
    }
  }
`;