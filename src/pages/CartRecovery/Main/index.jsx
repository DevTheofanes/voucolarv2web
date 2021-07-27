import React from 'react';

import { MainComponent } from './styles';
import Title from '../Title/index.jsx';
import Cart from './Cart/index.jsx';
// import { RelatedProducts } from '../../../components/RelatedProducts';

function Main() {
  return (
    <MainComponent>
      <Title active="Initial"/>
      <Cart />
      {/* <RelatedProducts /> */}
    </MainComponent>
  );
}

export default Main;
