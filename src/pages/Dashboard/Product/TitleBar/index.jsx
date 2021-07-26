import React from 'react';

import { Container, PageTitleInner, FlexColLeft, FlexColRight, Breadcrumb, TextBreadcrumb } from './styles'

function ShopPageTitle (props) {
  const category = props.category;
  const categoryId = props.categoryId;
  const product = props.product;

  return (
    <Container>
    <PageTitleInner>
      <FlexColLeft>
        <div>
          <Breadcrumb>
            <TextBreadcrumb to={'/'} >Início</TextBreadcrumb>
            &nbsp;
            <span>/</span>
            &nbsp;
            <TextBreadcrumb to={`/category/${categoryId}`} >{category}</TextBreadcrumb>
            &nbsp;
            <span>/</span>
            &nbsp;
            <TextBreadcrumb to={`/`} >{product}</TextBreadcrumb>
          </Breadcrumb>
        </div>
      </FlexColLeft>
    <FlexColRight>

    </FlexColRight>

    </PageTitleInner>
    </Container>
    )
  }

  export default ShopPageTitle;
