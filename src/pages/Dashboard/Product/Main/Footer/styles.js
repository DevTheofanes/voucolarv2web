import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export const ProductFooter = styled.div`
max-width: 1080px;
padding-left: 15px;
padding-right: 15px;
width: 100%;
margin-left: auto;
margin-right: auto;
`;

export const TabsProduct = styled(Tabs)`
padding: 30px 0;
border-top: 1px solid #ececec;
display: flex;
flex-flow: row wrap;
max-width: 1080px;
width: 100%;
margin-left: auto;
margin-right: auto;
`;

export const TabProductList = styled(TabList)`
margin-top: -31px;
width: 100%;
justify-content: flex-start;
position: relative;
display: flex;
flex-flow: row wrap;
align-items: center;
padding: 0;
list-style: disc;
`;

export const TabLi = styled(Tab)`
margin-left: 0 !important;
display: inline-block;
list-style: none;
padding: 0;
position: relative;
margin-left: 7px;
margin-right: 7px;

&:hover {
  border-top: 3px solid #a16695;
  color: rgba(17,17,17,.85);
}

strong {
  color: #959595;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  font-size: .8em;
  letter-spacing: .02em;
  text-transform: uppercase;
  padding: 10px 0;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
}
`
export const TabPanelProduct = styled(TabPanel)`
width: 100%;
padding-top: 1em;
`;

export const TabAditionalInformation = styled.div`
display: block !important;
padding: 0;
`;

export const TableProduct = styled.table`
width: 100%;
margin-bottom: 1em;
border-color: #ececec;
border-spacing: 0;
`;

export const TableReview = styled(TabAditionalInformation)``

export const Reviews = styled.div`
padding-left: 0;
padding-right: 0;
margin-left: -15px;
margin-right: -15px;
width: auto;
display: flex;
flex-flow: row wrap;
max-width: 1080px;
`;

export const Coments = styled.div`
max-width: 100%;
flex-basis: 100%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;
