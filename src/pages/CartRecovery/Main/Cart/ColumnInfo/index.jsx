import React from 'react';
import { More } from '../../../../../components/MoreMinus';
import { useCart } from '../../../../../hooks/useCart';
import { useUser } from '../../../../../hooks/useUser';

import {
  ColInfo,
  Form,
  ProductName,
  ProductPrice,
  ProductSubTotal,
  ProductRemove,
  ProductThumbnail,
  ProductNameGrid,
  ProductPriceGrid,
  ProductQuantity,
  ProductSubTotalGrid,
  Actions,
  ImagesPhone
} from './styles';

function ColumnInfo() {
  const {host} = useUser()
  const { cart, removeToCart, incrementToCart, decrementToCart } = useCart()

  return (
        <ColInfo>
          <Form>
            <div>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <ProductName colSpan={2}>Produto</ProductName>
                    <ProductPrice>Preço</ProductPrice>
                    <ProductPrice>Quantidade</ProductPrice>
                    <ProductSubTotal>Subtotal</ProductSubTotal>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map(item =>(
                      <tr key={item.id}>
                        <ProductRemove>
                          <button type="button" onClick={() => removeToCart(item.id)}>×</button>
                        </ProductRemove>
                        <ProductThumbnail>
                          
                        <ImagesPhone>
                          <div>
                            <img src={`${host}/files/${item.image}`} alt={item.name} />
                            <img src={`${host}/files/${item.background}`} alt=""/>
                          </div>
                        </ImagesPhone>
                        </ProductThumbnail>
                        <ProductNameGrid>
                          <a href="/cart">{item.name}</a>
                        </ProductNameGrid>
                        <ProductPriceGrid>
                          <span>
                            {
                              new Intl.NumberFormat('pt-BR',{
                                style: "currency",
                                currency:"BRL"
                              }).format(item.value)  
                            }
                          </span>
                        </ProductPriceGrid>
                        <ProductQuantity>
                          <More onClickMinus={() => decrementToCart(item.id)} onClickPlus={() => incrementToCart(item.id)} value={item.amount}/>
                        </ProductQuantity> 
                        <ProductSubTotalGrid>
                          <span>
                            {
                              new Intl.NumberFormat('pt-BR',{
                                style: "currency",
                                currency:"BRL"
                              }).format(item.subtotal)  
                            }
                          </span>
                        </ProductSubTotalGrid>
                      </tr>
                    ))
                  }
                  <tr>
                    <Actions colSpan={6}>
                      <div>
                        <a href="/">← Continuar comprando </a>
                      </div>
                      {/* <button>Atualizar carrinho</button> */}
                    </Actions>
                  </tr>
                </tbody>
              </table>
            </div>
          </Form>
        </ColInfo>
  );
}

export default ColumnInfo;
