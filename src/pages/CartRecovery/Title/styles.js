import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleComponent = styled.div`
  position: relative;
`;

export const TitleInner = styled.div`
  position: relative;
  /* padding-top: 20px; */
  min-height: 60px;
`;

export const FlexCol = styled.div`
  flex: 1;
  max-height: 100%;
`;

export const Breadcrumbs = styled.nav`
  width: 100%;
  padding: 15px 0;

  font-size: 1.6rem;
  /* font-family: 'Slabo 27px', sans-serif;   */
  font-weight: bold;

  line-height: 1.2;
  letter-spacing: 0;

  color: #222;
  text-align: center;
  text-transform: uppercase;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;

  cursor: pointer;

  span{
    margin: 0 0.365rem;
  }
`;
  

export const LinkRoute = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');

  color: ${props => props.active ? "#333" : "#ccc"};
  margin-left: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;    
  font-size: 1.25rem;
  /* font-family: 'Slabo 27px', serif; */

  @media (max-width:800px){
    font-size: 1rem;
  }
`;