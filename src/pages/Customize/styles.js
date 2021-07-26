import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;

  div+div{
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 27rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ChoiceYourPhone = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    color: #707070;
    font-size: 1rem;
    font-weight: bold;
  }

  div{
    margin-top: 0.875rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eee;
  }

  select {
    width: 42%;
    color: #F29595;
    font-size: 1.125rem;
    margin-top: 0.875rem;
    padding: 0 0.5rem;
    height: 2rem;
    border-radius: 0.25rem;
       
    border: 0;
    background-color: var(--shape);
    font-weight:400;
    font-size: 1rem; 
        
    &::placeholder{
      color: #c1c1c1;
    }
  }
`;