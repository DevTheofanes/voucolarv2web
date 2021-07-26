import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  border-radius: .5rem;
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 48rem;
  background-color:#f7f7f7;
`;

export const OrdersContainer = styled.div`
  margin-right: 1rem;
  max-height: 20rem;
  overflow: auto;

`;

export const Order = styled.div`
  background-color:#fff;
  padding: .25rem .5rem;
  border-radius: .25rem;
  margin-top: .5rem;


  div{
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

  div + div{
    margin-top: .5rem;
  }
`;

export const InfoContainer = styled.div`
  padding-left: 1rem;
  border-left: 1px solid #c1c1c1;

  button{
    background-color: #a16695;
    color: #f7f7f7;

    padding: .25rem .75rem;
    border: 0;
    border-radius: .25rem;
    margin-top: 1rem;
  }
`;

export const Item = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  input{
    height: 1.8rem;
    border: 1px solid #c1c1c1;
    border-radius: .25rem;
    padding: 0 .5rem;
  }
`;
