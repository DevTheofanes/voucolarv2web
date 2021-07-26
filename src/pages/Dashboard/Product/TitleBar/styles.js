import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
position: relative;
`;

export const PageTitleInner = styled.div`
position: relative;
padding-top: 20px;
min-height: 60px;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 1080px;
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;
`;

export const FlexColLeft = styled.div`
flex: 1;

div {
  font-size: 1.3em;
}
`;

export const Breadcrumb = styled.nav`
color: #222;
font-weight: bold;
letter-spacing: 0;
padding: 0;
line-height: 1.2;
text-transform: uppercase;
display: block;

 span {
  position: relative;
  top: 0;
  opacity: .35;
  margin: 0 .3em;
  font-weight: 300;
 }
`;

export const TextBreadcrumb = styled(Link)`

  color: rgba(102,102,102,0.7) !important;
  font-weight: normal;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;

  &:hover {
    color: #222 !important;
    text-decoration: none;
  }

`;

export const FlexColRight = styled.div``;
