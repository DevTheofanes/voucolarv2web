import styled from 'styled-components';

export const FormContent = styled.div`
  max-height: 70vh;
  overflow-y: auto;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
`;

export const Division = styled.div`
  width: 90%;
  /* border-bottom: 1px solid #c2c2c2; */
  margin: 0.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;

  label{
    font-weight: 500;
  }

  span{
    margin: 0 0 .5rem .5rem;
  }

  .productsList{
    display: flex;
    flex-direction: column;
  }

  .productsList + .productsList {
    padding-top: 0.5rem;
    border-top: 1px solid #c1c1c1;
  }
`;
