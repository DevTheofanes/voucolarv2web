
import { useEffect, useState } from 'react';

import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';

import { AcessLayout as Container } from '../index'
import { HeaderContent } from '../styles'
import { InfoOrder } from './Modal';
import { Content, Item } from './styles';

export const AcessOrders = (props) => {
  const { token } = useUser();
  const [orders, setOrders] = useState([])
  const [orderSelected, setOrderSelected] = useState(null)
  const [orderFilterSelected, setOrderFilterSelected] = useState("/")

  const [isOrderInfoOpen, setIsOrderInfoOpen] = useState(false)

  async function loadOrders(){
    const response = await api.get("orders")

    setOrders(response.data.reverse())
    
    setOrderSelected(response.data[0])
  }

  useEffect(() => {
    loadOrders();

    if(token){
      api.defaults.headers.authorization = token
    }
  }, [ token])

  async function loadOrdersFiltred(){
    if(orderFilterSelected !== "0"){
      const response = await api.get(`orders/${orderFilterSelected}`)
      setOrders(response.data.reverse())
      setOrderSelected(response.data[0])
    }else{
      const response = await api.get("orders")

      setOrders(response.data.reverse())
      
      setOrderSelected(response.data[0])
    }
  }

  useEffect(()=>{
    loadOrdersFiltred()
  }, [orderFilterSelected])

  return (
    <Container>
      <HeaderContent>
        <span>Pedidos</span>

        <select onChange={e => setOrderFilterSelected(e.target.value)}>
          <option value="0">Filtrar pedidos por status</option>
          <option value="0">Todos</option>
          <option value="awaiting">Aguardando Pagamento</option>
          <option value="payment">Pagamento efetuado</option>
          <option value="production">Em produção</option>
          <option value="transported">Sendo Transportado</option>
          <option value="delivered">Entregue</option>
        </select>
      </HeaderContent>
      <Content>
        {
          orderSelected ? (
            orders.map(order => (
              <Item 
                key={order.id} 
                statusColor={order.statusColor ? order.statusColor : "#ffba00"} 
                onClick={() => {
                  setIsOrderInfoOpen(true)
                  setOrderSelected(order)
                }}
                >
                  <strong>Pedido </strong>
                  <span>#{order.id}</span>
                  <strong>Status </strong>
                  <span className="orderStatus">{order.status}</span>
                  <strong>Cliente </strong>
                  <span>{order.user.name}</span>
                  <strong>Total </strong>
                  <span>
                    {
                      new Intl.NumberFormat('pt-BR',{
                        style: "currency",
                        currency:"BRL"
                      }).format(order.total)
                    }
                  </span>
              </Item>
          ))
          ): null
        }
        {
          orderSelected ? (
            <InfoOrder isOpen={isOrderInfoOpen} onRequestClose={() => setIsOrderInfoOpen(false)} order={orderSelected}/>  
          ): null
        }
      </Content>
    </Container>
  );
}

