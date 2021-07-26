import React, { useEffect, useState } from 'react';

import {
  ProductFooter,
  TabsProduct,
  TabProductList,
  TabLi,
  TabPanelProduct,
  TabAditionalInformation,
  TableProduct,
} from './styles'

function FooterProduct (props) {
  const models = props.models
  const modelSelect = props.modelSelect
  const [ model, setModel ] =  useState({})

  // async function loadInfos(){
  //   try {
  //     const { data } = await api.get(`/models/${modelSelect}/products`)
      
  //     setProducts(data)
  //   } catch (error) {
  //     console.log(error.data)
  //   }
  // }

  useEffect(() => {
    for (const key in models) {
      if (Object.hasOwnProperty.call(models, key)) {
        const element = models[key];

        if(element.id === Number(modelSelect)){
          setModel(element)
        }
      }
    }
  }, [modelSelect])

  return (
    <ProductFooter>
      <TabsProduct>
        <TabProductList>
          <TabLi>
            <strong>Descrição</strong>
          </TabLi>
          <TabLi>
            <strong>Informação adicional</strong>
          </TabLi>
        </TabProductList>

        <TabPanelProduct>
          <div>
            <p>{model.description}</p>
          </div>
        </TabPanelProduct>
        <TabPanelProduct>
          <TabAditionalInformation>
            <TableProduct>
              <tbody>
                <tr>
                  <th>Peso</th>
                  <td>{model.weight}</td>
                </tr>
                <tr>
                  <th>Dimensões</th>
                  <td>{model.dimensions}</td>
                </tr>
              </tbody>
            </TableProduct>
          </TabAditionalInformation>
        </TabPanelProduct>
      </TabsProduct>
    </ProductFooter>
  )
}

export default FooterProduct;
