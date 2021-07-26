import { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { toast } from 'react-toastify';

import { NewHeader } from '../../../components/NewHeader';
import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';
import Title from '../Title'
import { Container, InfoOrder, ButtonContainer } from './styles';

export function FinishBuy(props) {
  const id = props.match.params.id;

  const [link, setLink] = useState("");
  const [order, setOrder] = useState({});

  const { token } = useUser()

  async function handlePay(){
      const response = await api.get(`/orders/${id}`)
      setOrder(response.data)
      console.log(response.data)

      try {
        const response = await api.post(`/order/${id}/transactions`, {"payment_method":"boleto"})
        console.log(response.data)
        setLink(response.data.boleto_url)
      } catch (error) {
        toast.error(error.response.data.error)
      }
  }

  useEffect(()=> {
    console.log("to")
        api.defaults.headers.authorization = token;
    handlePay()
  }, [token])

  // console.log(link)

  return (
    <>
      <NewHeader />
      <Title active="End"/>
      
      <Container>
        <h1>Pedido realizado com sucesso</h1>
        
        <InfoOrder>
          <h3>Dados do pedido</h3>
          <div>
            <strong>Id</strong>
            <span>#{order.id}</span>
            <strong>Status</strong>
            <span>{order.status}</span>
            <strong>Nome</strong>
            <span>{order.address?.name}</span>
            <strong>Email</strong>
            <span>{order.user?.email}</span>
            <strong>Totall</strong>
            <span>
              {
                new Intl.NumberFormat('pt-BR',{
                  style: "currency",
                  currency:"BRL"
                }).format(order.total)
              }
            </span>
            <strong>Metodo de pagamento</strong>
            <span>Boleto Bancario</span>
          </div>
        </InfoOrder>

        <ButtonContainer>
          <a href={link} target="_blank">
            Pagar
            <BsArrowRightShort color="#fff" size={24}/>
          </a>
        </ButtonContainer>
      </Container>
    </>
  );
}