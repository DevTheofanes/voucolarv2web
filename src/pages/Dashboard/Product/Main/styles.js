import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15px;
  padding: 40px 0;
`;

export const RowContent = styled.div`
  margin-bottom: 0 !important;
  width: 100%;
  /* display: flex; */
  /* flex-flow: row wrap; */
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width:800px){
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

export const ProductGallery = styled.div`
  padding-bottom: 0 !important;
  /* max-width: 33.33333%; */
  flex-basis: 33.33333%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`;

export const ProductFigure = styled.figure`
  margin: 0;
  position: relative;
  scrollbar-width: none;
`;

export const FlickityViewPort = styled.div`
  height: 586.85px;
  touch-action: pan-y;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width:499px){
    height: 30rem;
  }
`;

export const FlickitySlider = styled.div`
  left: 0px;
  transform: translateX(0%);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ProductGalleryDiv = styled.div`
  position: absolute;
  left: 0%;
  width: 100% !important;
  padding: 0;
  margin: 0;
  @media (max-width:499px){
    /* position: static; */
    display: flex;
    align-items: center;
    left: 20%;
  }
  a {
    color: #f09595;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
    img {
      width: 100%;
      opacity: 1;
      max-width: 100%;
      height: auto;
      display: inline-block;
      vertical-align: middle;
      border-style: none;
    }
  }
`;


export const ProductInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');

  width: 100% !important;
  float: none !important;
  padding-top: 10px;
  flex: 1;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  h1 {
    /* font-family: 'Slabo 27px', serif; */
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 1.3;
    
    color: #444;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0.5em;
    text-rendering: optimizeSpeed;
  }
`;

export const Divider = styled.div`
  height: 3px;
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 1em 0 1em;
  width: 100%;
  max-width: 30px;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.365rem;

  margin: 0.5rem 0;

  p {
    color: #c1c1c1;
    font-weight: 400;
    text-decoration: line-through;
  }

  span {
    color: #333;
    font-weight: 600;
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;

    white-space: nowrap;
  }
`;

export const SelectModel = styled.select`
  width: 60%;
  padding: 0 0.5rem;
  height: 2rem;
  border-radius: 0.25rem;

  margin: 0.5rem 0 1rem;;
    
  border: 1px solid #c1c1c1;
  background-color: var(--shape);
  font-weight:400;
  font-size: 1rem; 
      
  &::placeholder{
    color: #c1c1c1;
  }
`;

export const ProductDescription = styled.p`
  margin: 1rem 0 2rem;
  line-height: 2.2;
`;

export const Button = styled.a`
  display: block;
  margin: 10px 0;
  pointer-events: visible;
  cursor: pointer;
  background: #a16695;
  border-radius: 7px;
  max-width: 85%;
  color: #fff !important;
  padding: 10px 10px;
  text-decoration: none;
  touch-action: manipulation;
`;

export const ProductMeta = styled.div`
  font-size: 0.8em;
  margin-top: 1rem;
  margin-bottom: 1em;
  width: 60%;
  span {
    display: block;
    border-top: 1px dotted #ddd;
    padding: 5px 0;
    strong {
      color: #f09595;
      font-weight: normal;
      text-decoration: none;
      touch-action: manipulation;
      background-color: transparent;
    }
  }
`;

export const ProductSidebar = styled.div`
  font-size: 0.9em;
  max-width: 16.66667%;
  flex-basis: 16.66667%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`;


export const ImagesPhone = styled.div`
  div{
    position: relative;
  }

  img {
    position: absolute;
    top: 0;
    width: 20rem;
    height: 36.25rem;
  }

  @media (max-width:499px){
    img{
      width: 16rem;
      height: 29rem;
    }
  }
`;
