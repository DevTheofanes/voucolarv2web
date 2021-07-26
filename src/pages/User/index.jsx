import { useEffect, useState } from 'react'

import { useUser } from '../../hooks/useUser'
import api from '../../services/api'

import { NewHeader } from '../../components/NewHeader'
import { Container, Content, Item, InfoContainer, OrdersContainer, Order } from './styles'


export function UserData() {
  const { user, LogoutSession, token } = useUser()
  const [ orders, setOrders ] = useState([])

  async function loadOrders(){
    const response = await api.get(`/orders`)
    setOrders(response.data)
  }

  useEffect(() => { 
    console.log(token)
    api.defaults.headers.authorization = token
    loadOrders()
  }, [user, token])

  return (
    <>
      <NewHeader />

      <Container>
        <h1>Seus dados na VouColar</h1>

        
        <Content>
          <OrdersContainer>
            <h3>Meus Pedidos</h3>

            {
              orders.map(order => (
                <Order key={order.id}>
                  <div>
                    <strong>Indentificador</strong>
                    <span>#{order.id}</span>
                  </div>
                  <div>
                    <strong>Status</strong>
                    <span>{order.status}</span>
                  </div>
                  <div>
                    <strong>Total</strong>
                    <span>{
                      new Intl.NumberFormat('pt-BR',{
                        style: "currency",
                        currency:"BRL"
                      }).format(order.total)  
                    }</span>
                  </div>
                </Order>
              ))
            }
          </OrdersContainer>

          <InfoContainer>
            <h3>Meus dados</h3>

            <Item>
              <span>Seu nome: </span>
              <input type="text" placeholder={user.name}/>
            </Item>

            <Item>
              <span>Seu e-mail: </span>
              <input type="text" placeholder={user.email}/>
            </Item>

            <button onClick={LogoutSession}>Sair</button>
          </InfoContainer>
        </Content>
      </Container>
    </>
  );
}
