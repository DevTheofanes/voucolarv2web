import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;

  h1{
    font-size: 1.5rem;
    color: #222;
    /* margin: 2rem; */
  }

  h2{
    font-size: 1.25rem;
    margin-bottom: 1.8rem;
    color: #222;
  }

  button{
    background-color:  #F29595;
    margin-top: 1.8rem;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
  }
`;