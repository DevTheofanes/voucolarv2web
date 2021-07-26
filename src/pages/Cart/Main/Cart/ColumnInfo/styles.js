import styled from 'styled-components';

export const ColInfo = styled.div`
  padding: 0 30px 30px;
  margin-bottom: 0;
  padding-bottom: 0 !important;
  max-width: 58.33333%;
  flex-basis: 58.33333%;
  position: relative;
  margin: 0;
  width: 100%;
`;

export const Form = styled.form`
  margin-bottom: 1.3em;

  table {
    width: 100%;
    margin-bottom: 1em;
    border-color: #ececec;
    border-spacing: 0;
  }
`;

export const ProductName = styled.th`
  padding-left: 0;
  line-height: 1.05;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5em;
  text-align: left;
  border-bottom: 3px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;
`;

export const ProductPrice = styled.th`
  line-height: 1.05;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5em;
  text-align: left;
  border-bottom: 3px solid #ececec;
  font-size: 0.9em;
`;

export const ProductSubTotal = styled.th`
  text-align: right;
  border-right: 0;
  padding-right: 0;
  line-height: 1.05;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5em;
  text-align: left;
  border-bottom: 3px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;
`;

export const ProductRemove = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 20px;
  color: #666;
  text-align: left;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  button {
    display: block;
    border: 0;
    width: 24px;
    height: 24px;
    font-size: 15px !important;
    line-height: 19px !important;
    border-radius: 100%;
    color: #ccc;
    font-weight: bold;
    text-align: center;
    /* border: 2px solid currentColor; */
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
  }
`;

export const ProductThumbnail = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  min-width: 60px;
  max-width: 90px;
  width: 90px;
  color: #666;
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  a {
    color: #f09595;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;

    img {
      transition: opacity 1s;
      opacity: 1;
      max-width: 100%;
      height: auto;
      display: inline-block;
      vertical-align: middle;
      border-style: none;
    }
  }
`;

export const ProductNameGrid = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  word-break: break-word;
  color: #666;
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  a {
    color: #f09595;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
  }
`;

export const ProductPriceGrid = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  color: #666;
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  span {
    white-space: nowrap;
    color: #111;
    font-weight: bold;
  }
`;

export const ProductQuantity = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  color: #666;
  text-align: left;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  div {
    margin: 0;
    display: inline-flex;
    white-space: nowrap;
    vertical-align: top;
  }
`;

export const MinusButton = styled.input`
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.09);
  color: currentColor !important;
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #ddd;
  text-transform: none;
  font-weight: normal;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-right: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  display: inline-block;
  margin: 0;
  font-size: 0.97em;
  letter-spacing: 0.03em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  line-height: 2.4em;
  min-height: 2.5em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
`;

export const Quantity = styled.input`
  max-width: 2.5em;
  width: 2.5em;
  text-align: center;
  border-radius: 0 !important;
  -moz-appearance: textfield;
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.09);
  color: currentColor !important;
  padding-left: 0;
  padding-right: 0;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #ddd;
  height: 2.507em;
  touch-action: manipulation;
  font: inherit;
`;

export const PlusButton = styled.input`
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.09);
  color: currentColor !important;
  border-radius: 99px;
  overflow: hidden;
  position: relative;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #ddd;
  text-transform: none;
  font-weight: normal;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-left: 0 !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  display: inline-block;
  margin: 0;
  font-size: 0.97em;
  letter-spacing: 0.03em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  line-height: 2.4em;
  min-height: 2.5em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  -webkit-appearance: button;
  touch-action: manipulation;
  font: inherit;
`;

export const ProductSubTotalGrid = styled.td`
  text-align: right;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 0;
  color: #666;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: 0.9em;

  span {
    white-space: nowrap;
    color: #111;
    font-weight: bold;
  }
`;

export const Actions = styled.td`
  text-align: right;
  border: 0;
  padding: 15px 0 10px;
  color: #666;
  line-height: 1.3;
  font-size: 0.9em;

  div {
    float: left;
    text-align: left;
    margin-left: 0 !important;

    a {
      color: #a16695;
      border: 2px solid currentColor;
      background-color: transparent;
      line-height: 2.19em;
      margin-bottom: 1em;
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.97em;
      letter-spacing: 0.03em;
      cursor: pointer;
      font-weight: bolder;
      text-align: center;
      text-decoration: none;
      border-radius: 0;
      margin-top: 0;
      margin-right: 1em;
      text-shadow: none;
      min-height: 2.5em;
      padding: 0 1.2em;
      max-width: 100%;
      text-rendering: optimizeLegibility;
      box-sizing: border-box;
    }
  }

  button {
    background-color: #a16695;
    float: left;
    margin-top: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 1em;
    color: #fff;
    border-color: rgba(0, 0, 0, 0.05);
    position: relative;
    text-transform: uppercase;
    font-size: 0.97em;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-weight: bolder;
    text-align: center;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 0;
    margin-right: 1em;
    text-shadow: none;
    line-height: 2.4em;
    min-height: 2.5em;
    padding: 0 1.2em;
    max-width: 100%;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -webkit-appearance: button;
    font: inherit;
  }
`;

export const ImagesPhone = styled.div`
  div{
    position: relative;
  }

  img { 
    width: 4.125rem !important;
    height: 6.1875rem;
  }

  img + img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;