
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
  const [orderSelected, setOrderSelected] = useState({})

  const [isOrderInfoOpen, setIsOrderInfoOpen] = useState(false)

  async function loadOrders(){
    const response = await api.get("/orders")

    setOrders(response.data.reverse())
    setOrderSelected(response.data[0])
  }

  useEffect(() => {
    loadOrders();
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Pedidos</span>
      </HeaderContent>
      <Content>
        {
          orders.map(order => (
              <Item 
                key={order.id} 
                statusColor={order.status === "Pagamento efetuado" ? "#00a400" : "#ffba00"} 
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
        }
        <InfoOrder isOpen={isOrderInfoOpen} onRequestClose={() => setIsOrderInfoOpen(false)} order={orderSelected}/>
      </Content>
    </Container>
  );
}

