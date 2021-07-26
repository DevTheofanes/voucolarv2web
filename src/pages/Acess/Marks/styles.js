import styled from 'styled-components';

export const ContainerModalDelete = styled.div`
  display: flex;
  flex: 1;
  border-radius: "8px";
  flex-direction: column;
  background-color: #fff;

  padding: 8px;

  h1{
    color: #222;
    font-size: 20px;
    text-align: center;
  }

  button{
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 4px 10px;
    border: 0;
    margin: 8px auto;

    border-radius: 8px;
    background-color: rgb(220, 53, 69);

    label {
      font-weight: bold;
      margin: 0;
      color: #fff;
    }
  }
`;

export const ContainerModalNew = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding: 12px;

  h1{
    color: #222;
    font-size: 20px;
    text-align: left;
  }

  div:first-child{
    border-bottom: 1px solid #eee;
  }

  div:last-child{
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
  }
  
  span{
    margin: 10px 0;
    color: #555;
    text-align: left;
  }

  button{
    margin-top: 8px;
    display: flex;
    align-self: flex-end;
    align-items: center;
    background-color: #00cc00;
    border: none;
    max-width: 72px;
    max-height: 40px;
    border-radius: 6px;
    padding: 2px 16px;

    span{
      color: #fff;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 0;

  input {
    height: 38px;
    padding: 6px 12px;
    border: 1px solid rgb(206, 212, 218);
  }  
`;