import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10rem;
  margin: 1.5rem auto;

  display: grid;
  grid-template-columns: 2fr 1.25fr;
  gap: 2rem;
`;

export const Form = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
  border-top: 2px solid #ddd;
  padding: 1.9rem 0 0;
  margin-bottom: 4rem;

  h4{
    color: #555;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Slabo 27px', serif;
  }

  span{
    color: #222;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  input{
    width: 100%;
    height: 2rem;
    border: 1px solid #c1c1c1;
    padding: 0 0.5rem;
  }
`;

export const InfoCart = styled.div`
  height: fit-content;
  border: 2px solid #a16695;
  padding: 30px;

  h4{
    color: #555;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Slabo 27px', serif;
  }

  .radioItem{
    display: flex;

    input{
      margin-right: 1rem;
    }
  }

  button{
    display: flex;
    align-items: center;
    justify-content:center;

    border: 0;
    border-radius: 0;
    background-color: #36b5b0;

    margin: 2rem 0;
    padding: 0 1rem;
    height: 2rem; 

    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
  }

  p{
    font-size: 0.8rem;
    text-align: justify;
    color: #777;
  }
`;

export const BoxInputDuo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  margin-top: 1rem;

  div{
    display: flex;
    flex-direction: column;
  }
`;

export const InputSelect = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  select{
    width: 100%;
    height: 2rem;
    border: 1px solid #c1c1c1;
    padding: 0 0.5rem;
  }
`

export const BoxInputOne = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  textarea{
    width: 100%;
    min-height: 5rem;
    border: 1px solid #c1c1c1;
    padding: 0.5rem;
  }
`

export const BoxInputRadio = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  
  input{
    width: 0.7rem;
    margin-right: 0.5rem;
  }

  span{
    margin: 0;
  }
`

export const InfoTitle = styled.div`
  margin-top: 1rem;
  border-bottom: 1px solid #c1c1c1;

  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  padding: 1rem 0;
  /* width: 100% !important; */
  border-bottom: 1px solid #ececec;

  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: center;

  span{
    font-size: 0.9rem;
    color: #777;
    margin-right: 0.5rem;
  }

  label{
    font-size: 0.9rem;
    color: #444;
    margin-right: 0.5rem;
    font-weight: 500;
  }

  label+span{
    text-align: right;
    margin-right: 0;
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

export const FreteItem = styled.div`
  padding: 1rem 0;
  /* width: 100% !important; */
  border-bottom: 1px solid #ececec;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  span{
    font-size: 0.9rem;
    color: #777;
    margin-right: 0.5rem;
  }

  label{
    font-size: 0.9rem;
    color: #444;
    margin-left: 0.25rem;
    font-weight: 500;
  }

  label+input{
    margin-left: .5rem;
  }

  label+span{
    text-align: right;
    margin-right: 0;
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

    background: none;
    
    text-align: left;
    color: #f09595;
  }

  .valueFrete{
    margin: 0;
  }
`;

export const FreteItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;



  button{
    border: 0;
    margin: 0;
    padding: 0;

    font-size: 0.8rem;
    background: none;
    
    text-align: left;
    color: #f09595;
  }
`;