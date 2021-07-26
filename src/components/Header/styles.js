import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  max-height: 6.5625rem;
  padding: 0 8.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

    img {
      max-width: 10rem;
    }
  }

  @media (max-width:600px){
    img {
      max-width: 6rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* justify-content: space-between; */
  width: 72%;
  margin-left: 0.5rem;

  @media (max-width:600px){
    width: 100%;
    margin-left: 2rem;
    justify-content: flex-end;
  }
`;

export const Infos = styled.div`
  min-width: 30%;

  @media (max-width:600px){
    display: none;
  }

  /* a{
    font-size:
  } */

  a+a{
    margin-left: 0.5rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between;
  width: 100%; */
`;

export const ButtonEntry = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem 0.75rem;

  border: 0;
  border-radius: 0;
  border-right: 1px solid #c2c2c2;
  background-color: transparent;

  span{
    color: #777;
    font-weight: 400;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  @media (max-width:880px){
    padding: 0.25rem 0.5rem;
  }

  @media (max-width:600px){
    padding: 0 0.25rem;
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-end;
  
  margin-left: 0.5rem;
  padding: 0.5rem 0.75rem;

  border: 1px solid #c2c2c2;
  border-radius: 1.8rem;
  background-color: transparent;

  /* @media (max-width:880px){
    padding: 0.25rem 0.5rem;
  } */

  span{
    margin-left: 0.275rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: #c2c2c2;
  }

  @media (max-width:600px){
    padding: 0.25 0.5rem;

    a{
      font-size: 0.75rem;
      color: #777;
      font-weight: 400;
      font-size: 0.875rem;
      text-transform: uppercase;
    }
  }
`;