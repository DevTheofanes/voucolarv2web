import React from 'react';

import ColumnInfo from './ColumnInfo/index.jsx'
import { ColumnLaterals } from './ColumnLaterals/index.jsx'

import {
  CartComponent,
  CartContent,
} from './styles';

function Cart() {
  return (
    <CartComponent>
      <CartContent>
        <ColumnInfo />
        <ColumnLaterals />
      </CartContent>
    </CartComponent>
  );
}

export default Cart;
