import styled from 'styled-components';
import backgroundimg from '../../../assets/banner-vale-presente.jpg';

export const BannerComponent = styled.div`
  padding-top: 500px;
  background-color: rgb(255, 255, 255);
  position: relative;
  width: 100%;
  min-height: 30px;
`;

export const BannerInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 0 !important;
  margin: 0 !important;
`;

export const Background = styled.div`
  background-image: url(${backgroundimg});
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 0 !important;
  margin: 0 !important;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  left: -1px;
  right: -1px;
  background-color: rgba(190, 190, 190, 0.2);
  pointer-events: none;
`;

export const BannerLayer = styled.div`
  padding-left: 0;
  padding-right: 0;
  max-height: 100%;
  height: 100%;
  position: relative;
  max-width: 1080px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const TextBox = styled.div`
  width: 40%;
  font-size: 16px;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  max-height: 100%;
  position: absolute !important;
`;

export const TextBoxShadow = styled.div`
  background-color: rgb(255, 255, 255);
  font-size: 100%;
  position: relative;
  z-index: 10;
  backface-visibility: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.22);
`;

export const TextInner = styled.div`
  padding: 30px 30px 30px 30px;
  text-align: left;

  h2 {
    padding: 0;
    font-weight: normal;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    line-height: 1;
    font-size: 2.9em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: 'Slabo 27px', sans-serif;
    color: #555;
    width: 100%;
    text-rendering: optimizeSpeed;

    strong {
      font-weight: bolder;
    }
  }

  h3 {
    padding: 0;
    font-weight: normal;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    line-height: 1;
    font-size: 2em;
    font-family: 'Slabo 27px', sans-serif;
    color: #555;
    width: 100%;
    margin-top: 0;
    text-rendering: optimizeSpeed;
  }

  p {
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;
