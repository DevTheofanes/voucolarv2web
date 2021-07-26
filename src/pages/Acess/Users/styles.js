import styled from 'styled-components';


export const GridRow = styled.section`
  display:grid;
  grid-template-columns: 1fr 8fr 8fr;
  align-items: center;
  margin-top: 0.75rem;

 
  h3{
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }
  
  span{
    color: #222;
    font-size: 0.875rem;
  }

`;