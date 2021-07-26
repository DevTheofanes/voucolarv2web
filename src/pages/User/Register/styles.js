import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 88vh;
  padding: 0 10rem;

  background-color:#f7f7f7;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fff;
  padding: 2.8rem 2.25rem;
  border-radius: 0.5rem;

  h3{
    margin-bottom: 1.5rem;
    color: #f09595;
    font-weight: 600;
    font-size: 1.8rem;
  }

  input{
    width: 100%;
    padding: 0.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
     
    border: 1px solid #d7d7d7;
    /* background-color:#e7e9ee; */

    font-weight:400;
    font-size: 0.9rem; 
      
    &::placeholder{
      color: var(--text-body);
    }

    & + input{
      margin-top: 1.8rem;
    }
  }

  button{
    margin: 1.8rem auto;

    background-color: #a16695;
    border: 0;
    color: #fff;

    border-radius: 1rem;
    padding: 0.5rem 4rem;;
  }

  span{
    font-size: 0.8rem;
    width: 16.25rem;
    text-align: center;
  
    a{
      color: #a16695;
    }
  }
`;
