import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 30px;
  max-width: 1080px;
  
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto 120px;
  border-top: 0.1px solid #eff;
`;

export const BoxTitle = styled.div`
  margin-top: 30px;
  background-color:rgb(54, 181, 176);
  height: 269px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxTitleTextBold = styled.text`
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
  font-size: 32px;
  font-family: "Slabo 27px", sans-serif;
  color: #fff;
  font-weight: bold;
`;

export const BoxTitleTextBottom = styled.text`
  color: #fff;
  font-size: 16px;
`;

export const BoxInfos = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const BoxInfosImage = styled.img`
  width:525px;
  height: 342px;
`;

export const BoxInfosText = styled.text`
  color: #777;
  font-size: 16px;
  margin-left: 30px;
  max-width: 495px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
`;

export const BoxInfosTextTitle = styled.text`
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
  font-family: "Slabo 27px", sans-serif;
  color: #555;
  font-size: 20px;
  line-height: 2;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const BoxInfosTextSubTitle = styled.text`
  font-weight: bolder;
`;