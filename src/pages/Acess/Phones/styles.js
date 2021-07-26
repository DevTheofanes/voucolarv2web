import styled from 'styled-components';


export const GridRow = styled.section`
  display:grid;
  grid-template-columns: 0.5fr 1fr 2fr 4fr 1fr;
  align-items: center;
  margin-top: 0.75rem;

  @media (max-width:1480px){
    grid-template-columns: 0.5fr 1fr 2fr 4fr 1fr;

  }

  @media (max-width:1280px){
    grid-template-columns: 0.5fr 1fr 2fr 3.75fr 1.25fr;
  }

  @media (max-width:1080px){
    grid-template-columns: 0.5fr 1fr 1.75fr 3.5fr 1.5fr;
  }

  @media (max-width:880px){
    grid-template-columns: 0.5fr 1fr 1.5fr 3fr 1.75fr;
  }

  @media (max-width:620px){
    h3:nth-last-child(4){
      display: none;
    }

    img{
      display: none;
    }

    grid-template-columns: 0.5fr 2fr 2fr 1fr;

    div{
      button{
        font-size: 0.5rem;
        max-width: 2.8rem;
        max-height: 1.4rem;
      }
    }
  }

  @media (max-width:580px){
    h3:nth-last-child(4){
      display: none;
    }

    h3:nth-last-child(2){
      display: none;
    }

    img{
      display: none;
    }

    span:nth-last-child(2){
      display: none;
    }

    grid-template-columns: 0.5fr 2fr 1fr;

    div{
      button{
        font-size: 0.5rem;
        max-width: 2.8rem;
        max-height: 1.4rem;
      }
    }
  }

  h3{
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }

  h3:last-child{
    text-align: center;
  }

  

  img{
    height:5.3125rem;
    max-width:5.3125rem;
  }

  span{
    color: #222;
    font-size: 0.875rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
      border: 0;
      border-radius: 8px;

      /* padding: 0.25rem 0.625rem; */
      width: 4.2rem;
      height: 2.2rem;

      background-color: #ffc107; 

      label{
        color: #fff;
        margin: 0;
      }
    }

    button + button {
      background-color: rgb(220, 53, 69);
      /* margin-left: 0.875rem; */
    }
  }
`;