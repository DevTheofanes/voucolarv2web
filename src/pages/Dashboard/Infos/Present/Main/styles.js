import styled from 'styled-components';

export const MainComponent = styled.div`
  background-color: #fff;
  position: relative;
  display: block;
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const RowMain = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const Large12Col = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`;

export const ColInner = styled.div`
  margin-left: auto;
  margin-right: 0;
  position: relative;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
