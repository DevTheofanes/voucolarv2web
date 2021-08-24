import React from 'react';
import { Link } from 'react-router-dom';
import { More } from '../../../../../components/MoreMinus';
import { useCart } from '../../../../../hooks/useCart';
import { useUser } from '../../../../../hooks/useUser';

import {
  ColInfo,
  Form,
  ProductName,
  ProductPrice,
  ProductSubTotal,
  ProductInvisible,
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
                    <ProductInvisible>{""}</ProductInvisible>
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
                            <Link to={item.category ? `/category/${item.category.name}/product/${item.id}` : '#'}>
                              <img src={`${host}/files/${item.image}`} alt={item.name} style={{ objectFit: "cover"}}/>
                              <img src={`${host}/files/${item.background}`} alt=""/>
                            </Link>
                          </div>
                        </ImagesPhone>
                        
                        
                        </ProductThumbnail>
                        <ProductNameGrid>
                          <a href={item.category ? `/category/${item.category.name}/product/${item.id}` : '#'}>{item.name}</a>
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

