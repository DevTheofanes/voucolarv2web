import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 1.5em;
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h3`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: 'Slabo 27px', sans-serif;
  font-size: 1.25em;
  color: #555;
  margin-top: 0;
  margin-bottom: 0.5em;
  text-rendering: optimizeSpeed;

  b {
    display: block;
    flex: 1;
    height: 2px;
    opacity: 0.1;
    background-color: currentColor;
    font-weight: bolder;
  }

  span {
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0.3em 0.8em;
    text-align: center;
    text-transform: uppercase;
    box-decoration-break: clone;
  }
`;
