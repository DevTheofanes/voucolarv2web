import styled from 'styled-components';
import { shade } from 'polished';

export const QuantityButtons = styled.div`
  margin-bottom: 1em;
  display: inline-flex;
  margin-right: 1em;
  white-space: nowrap;
  vertical-align: top;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const MinusButton = styled.button`
  background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: currentColor !important;
border-radius: 99px;
overflow: hidden;
position: relative;
text-shadow: 1px 1px 1px #fff;
border: 1px solid #ddd;
text-transform: none;
font-weight: 400;
padding-left: .5em;
padding-right: .5em;
border-right: 0 !important;
border-top-right-radius: 0 !important;
border-bottom-right-radius: 0 !important;
display: inline-block;
margin: 0;
font-size: .97em;
letter-spacing: .03em;
cursor: pointer;
text-align: center;
text-decoration: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
-webkit-appearance: button;
touch-action: manipulation;
font: inherit;
`;

export const InputQuantity = styled.input`
/* max-width: 2.5em; */
/* width: 2.5em; */
cursor: initial;
width: 40px;
text-align: center;
border-radius: 0 !important;
font-size: 1em;
background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: #000;
/* color: currentColor !important; */
padding-left: 0;
padding-right: 0;
display: flex;
/* vertical-align: top; */
margin: 0;
box-sizing: border-box;
border: 1px solid #ddd;
align-items: center;
justify-content:center;
height: 2.507em;
`;

export const PlusButton = styled.button`
background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: currentColor !important;
border-radius: 99px;
overflow: hidden;
position: relative;
text-shadow: 1px 1px 1px #fff;
border: 1px solid #ddd;
text-transform: none;
font-weight: 400;
padding-left: .5em;
padding-right: .5em;
border-left: 0 !important;
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
display: inline-block;
margin: 0;
font-size: .97em;
letter-spacing: .03em;
cursor: pointer;
text-align: center;
text-decoration: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
`;


export const Button = styled.button`
background-color: #36b5b0;
margin-right: 0;
font-size: 1em;
opacity: .6;
border-radius: 99px;
margin-bottom: 1em;
color: #fff;
border-color: rgba(0,0,0,.05);
position: relative;
display: inline-block;
text-transform: uppercase;
letter-spacing: .03em;
cursor: pointer;
font-weight: bolder;
text-align: center;
text-decoration: none;
border: 1px solid transparent;
vertical-align: middle;
margin-top: 0;
text-shadow: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
transition: background-color 0.2s;

&:hover {
  text-decoration: none;
  color: #fff;
  background: ${shade(0.2, '#36b5b0')};
}
`;