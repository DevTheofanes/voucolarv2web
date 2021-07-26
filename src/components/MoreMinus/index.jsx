import React from 'react';
import { QuantityButtons, MinusButton, InputQuantity, PlusButton, Button } from './styles'

export const More = props => {
  const { onClickMinus, onClickPlus, value, onClickBuy } = props;
  return(
    <>
      <QuantityButtons>
        <MinusButton onClick={onClickMinus} >-</MinusButton>
        <InputQuantity type="number" value={value} disabled/>
        <PlusButton onClick={onClickPlus}>+</PlusButton>
      </QuantityButtons>

      {
        onClickBuy ? (
          <Button onClick={onClickBuy}>comprar</Button>
        ) : null
      }
    </>
  )
}