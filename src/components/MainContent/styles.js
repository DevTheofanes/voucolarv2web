import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0 8.75rem;
  display: flex;
  /* max-width: 1140px; */

  
  /* justify-content: center; */

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

  @media (max-width:600px){
    flex-direction: column;
  }
`;


export const CategoriesBox = styled.div`
  width: 16%;
  margin-top: 1.875rem;
  margin-right: 2rem;

  @media (max-width:600px){
    display: none;
  }

  h1{
    color: #707070;
    text-transform: uppercase;
    font-size: 1.125rem;
  }

  div{
    margin-top: 0.875rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eee;

    a{
      color: #F29595;
      font-size: 1.125rem;
      margin-top: 0.875rem;
    }
  }
`;

export const CategoriesBoxForPhone = styled.div`
  display: none;

  @media (max-width:600px){
    display: flex;
    justify-content: flex-end;
  }

  select{
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

  margin-bottom: 1rem;
`;

export const Content = styled.div`
  width: 84%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* max-width: 1140px; */
  /* justify-content: center; */

  @media (max-width:600px){
    width: 100%;
  /* align-items: center; */
  }
`;
