import {useState} from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { FormContent, Division, SubTitle } from './styles';

import api from '../../../../services/api';
import history from '../../../../services/history';
import { ButtonsContainer } from '../../../../components/Modal/FormModal/styles';

export function InfoOrder({ isOpen, onRequestClose, order }) { 
  const [newStatus, setNewStatus] = useState(order.status)

  async function handleSave(e){
    e.preventDefault()

    if(newStatus !== order.status){
      const response = await api.put(`orders/${newStatus}/${order.id}`)
    }

    history.go("/acess/orders")
  }
  
  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title={`Pedido #${order.id}`} subTitle={order.status} subTitleColor={order.statusColor}>
      <FormContent>
        <SubTitle>Mudar status do pedido</SubTitle>
        <Division>
          <select onChange={e => setNewStatus(e.target.value)}>
            <option value={order.status}>Escolha novo status</option>
            <option value="production">Em produção</option>
            <option value="transported">Sendo Transportado</option>
            <option value="delivered">Entregue</option>
          </select>
        </Division>

        <SubTitle>Dados para contato.</SubTitle>
        <Division>
          <label>Nome</label>
          <span>{order.address ? order.address.name + " " + order.address.surname : null}</span>

          <label>Email</label>
          <span>{order.user ? order.user.email : null}</span>

          <label>Telefone</label>
          <span>{order.address ? order.address.phone : null}</span>

        </Division>

        <SubTitle>Produtos.</SubTitle>
        <Division>
          {
            order.products ? order.products.map(product => {
              let modelPhone = ""
              let amount = "1"

              const arrayProductsIds = order.productsIds.split(",")
              console.log(arrayProductsIds)
              for (const key in arrayProductsIds) {
                if (Object.hasOwnProperty.call(arrayProductsIds, key)) {
                  const element = arrayProductsIds[key];
                  console.log(element)
                  const [, mark, idProduct, ,amountProduct] = element.split("_")
                  if(Number(idProduct)  === Number(product.id)){
                    modelPhone = mark
                    if(amountProduct){
                      amount = amountProduct
                    }
                  }
                }
              }
              return (
                <div key={product.id} className="productsList">
                  <label>Produto</label>
                  <span>{product.name}</span>

                  <label>Celular</label>
                  <span>{modelPhone}</span>

                  <label>Quantidade</label>
                  <span>{amount} Capinhas</span>
                </div>
              )
            }) : null
          }
        </Division>

        <SubTitle>Produtos Personalizados.</SubTitle>
        <Division>
          {
            order.customizations ? order.customizations.map(product => {
              let modelPhone = ""
              let amount = "1"

              const arrayProductsIds = order.customizationsIds.split(",")

              for (const key in arrayProductsIds) {
                if (Object.hasOwnProperty.call(arrayProductsIds, key)) {
                  const element = arrayProductsIds[key];
                  // console.log(element)
                  const [, idProduct, ,amountProduct,, model] = element.split("_")

                  // console.log(idProduct, amountProduct, model)
                  if(Number(idProduct)  === Number(product.id)){
                    modelPhone = model
                    if(amountProduct){
                      amount = amountProduct
                    }
                  }
                }
              }
              return (
                <div key={product.id} className="productsList">
                  <label>Imagem Personalizada</label>
                  <span><a href={`https://server.voucolar.com.br:8002/files/${product.image}`} target="_blank" rel="noreferrer">link da imagem</a></span>

                  <label>Celular</label>
                  <span>{modelPhone}</span>

                  <label>Quantidade</label>
                  <span>{amount} Capinhas</span>
                </div>
              )
            }) : null
          }
        </Division>

        <SubTitle>Endereço para entrega.</SubTitle>
        <Division>
          <label>Rua </label>
          <span>{order.addressDelivery ? order.addressDelivery.street : null}</span>

          <label>Numero</label>
          <span>{order.addressDelivery ? order.addressDelivery.number : null}</span>

          {order.addressDelivery ? order.addressDelivery.neighborhood ? (
            <>
              <label>Bairro</label>
              <span>{order.addressDelivery.neighborhood}</span>
            </>
          ): null : null}
          

          <label>CEP</label>
          <span>{order.addressDelivery ? order.addressDelivery.cep : null}</span>

          <label>Estado</label>
          <span>{order.addressDelivery ? order.addressDelivery.state : null}</span>
        </Division>
      </FormContent>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleSave(e)}>Salvar</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  