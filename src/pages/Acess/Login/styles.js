import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background-color: rgb(35, 40, 45);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
    background-color: #fff;
    border-radius: 4px;
    padding: 32px 32px;

    h1{
        color: rgb(35, 40, 45);
        width: 380px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;

        margin-top: 16px;

        &:first-child {
            margin: 0;
        }

        input {
            border: 1px solid #c1c1c1;
            padding: 8px 16px;
        }
    }

    footer {
        margin-top: 32px;
        display: flex;
        justify-content: center;

        button{
            background-color: rgb(35, 40, 45);
            border: 0;
            padding: 8px 32px;
            border-radius: 4px;

            color: #fff;
            font-weight: bold;
        }
    }
`;