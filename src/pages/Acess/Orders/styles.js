import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Item = styled.button`
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  background-color: var(--background);

  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  strong{
    margin-top: 0.5rem;
    text-align: left;
  }

  span{
    margin-top: 0.5rem;
    text-align: right;
  }

  .orderStatus{
    color: ${props => props.statusColor ? props.statusColor : "#000"};
  }
`;