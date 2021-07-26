import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { TitleComponent, TitleInner, FlexCol, Breadcrumbs, LinkRoute } from './styles';

function Title({active}) {
  return (
    <TitleComponent>
      <TitleInner>
        <FlexCol>
          <Breadcrumbs>
            <LinkRoute to="/cart" active={active === "Initial" ? true : false}>Carrinho de compras</LinkRoute>
            <span>
              <FiChevronRight size={18} color="#ccc"/>
            </span>
            <LinkRoute to="/shopDetails" active={active === "Details" ? true : false}>Detalhes da compra</LinkRoute>
            <span>
              <FiChevronRight size={18} color="#ccc"/>
            </span>
            <LinkRoute to="/shopDetails" active={active === "End" ? true : false}>Pedido completo</LinkRoute>
          </Breadcrumbs>
        </FlexCol>
      </TitleInner>
    </TitleComponent>
  );
}

export default Title;
