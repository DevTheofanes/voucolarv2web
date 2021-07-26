import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoOrder = styled.div`
  margin-top: 1rem;
  padding: .5rem;
  max-width: 27rem;
  background-color: rgba(0,0,0,.02);
  border-radius: 8px;

  display:flex;
  flex-direction: column;
  align-items: center;

  h3{
    margin: .25rem auto;
    color: #333;
  }

  div{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .75rem 0;

    span{
      text-align: right;
      color: #666;
    }

    strong{
      color: #444;
    }

    margin-bottom: .5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  align-self: flex-end;
  margin-right: 2.5rem;

  button{
    background-color:  #F29595;
    margin-top: 1.8rem;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  a{
    background-color:  #F29595;
    margin-top: 1.8rem;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items:center;
    justify-content: center;
    text-decoration: none;
  }
`;