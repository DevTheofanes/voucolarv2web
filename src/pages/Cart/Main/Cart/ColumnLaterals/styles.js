import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid #ececec;
  padding: 0 30px 30px;
  margin-bottom: 0;
  padding-bottom: 0 !important;
  max-width: 41.66667%;
  flex-basis: 41.66667%;
  position: relative;
  margin: 0;
  width: 100%;

  h2{
    font-size: 0.9rem;
    color: #777;
    line-height: 1.05;
    letter-spacing: .05em;
    text-transform: uppercase;

    border-bottom: 1px solid #ececec;
    padding-bottom: 0.5rem;
  }
`;

export const Item = styled.div`
  padding: 1rem 0;
  /* width: 100% !important; */
  border-bottom: 1px solid #ececec;

  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;

  span{
    font-size: 0.9rem;
    color: #777;
    margin-right: 0.5rem;
  }

  span+span{
    text-align: right;
    margin-right: 0;
  }

  strong+span{
    margin-top: 1rem;
  }

  strong+span+strong{
    margin-top: 1rem;
  }

  strong{
    white-space: nowrap;
    color: #111;
    font-weight: 700;
    text-align: right;
  }

  button{
    border: 0;
    margin-top: 1rem;

    background: none;
    
    text-align: right;
    color: #f09595;
  }
`;

export const DeliveryContainer = styled.form`
  padding: 1rem 0;
  border-bottom: 1px solid #ececec;

  div{
    margin-bottom: 1rem;

    label{
      margin-left: 0.5rem;
    }

    label + input {
      margin-top: 0.75rem;
    }
  }

  .inputCEP{
    width: 100%;
    padding: 0.5rem;
    height: 2rem;
    border-radius: 0.25rem;
     
    border: 1px solid #d7d7d7;
    /* background-color:#e7e9ee; */

    font-weight:400;
    font-size: 0.8rem; 
      
    &::placeholder{
      color: var(--text-body);
    }

    & + input{
      margin-top: 1rem;
    }
  }

  button{
    width: 100%;

    border: 0;
    margin-top: 1rem;

    background: none;
    
    text-align: right;
    color: #f09595;
  }
`;

export const ButtonNext = styled.button`
  width: 100%;
  
  padding: 0.5rem 1rem;
  border: 0;
  margin: 2rem 0;

  background-color: #36b5b0;

  color: #fff;
  font-size: 0.97rem;
  font-weight: 700;
`;