import { useEffect, useState } from 'react';

import { 
  Container,
  Item,
  DeliveryContainer,
  ButtonNext,
} from './styles';

import { useCart } from '../../../../../hooks/useCart';
// import { calculateFrete } from '../../../../../utils/correios';
import history from '../../../../../services/history';
import api from '../../../../../services/api';

export function ColumnLaterals() {
  const { total } = useCart()

  const [ viewDeliveryBox, setViewDeliveryBox ] = useState(true)
  const [ freteWithdraw, setFreteWithdraw ] = useState(false)

  const [ selectTypeDelivery, setSelectTypeDelivery ] = useState('')
  const [ cep, setCep ] = useState('')

  const [ valueFrete, setValueFrete ] = useState(0)
  const [ daysFrete, setDaysFrete ] = useState(0)
  
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  async function loadFrete(e){
    e.preventDefault()

    if(!selectTypeDelivery){
      return alert("Selecione um tipo de entrega")
    }

    const validationOne = cep.length === 8;
    const validationTwo = isNumber(cep);

    if(!validationOne){
      return alert("Erro na validação")
    }

    if(!validationTwo){
      return alert("Erro na validação T")
    }
    
    if(selectTypeDelivery === "ret"){
      setValueFrete(0.00001)
      setDaysFrete(0.00001)
    }
    else{
      let option = "04014"

      if(selectTypeDelivery === "pac"){
        option = "04510"
      }

      // await calculateFrete({cep: cep, option: option}, setValueFrete, setDaysFrete)
      const responseToapi = await api.post("correios", {cep: cep, option: option})

      setValueFrete(responseToapi.data.value)
      setDaysFrete(responseToapi.data.days)
    }
  }

  function handleNext(){
    history.push("/shopDetails")
  }

  useEffect(() => {
    if(80000000 < cep && cep < 83540000){
      setFreteWithdraw(true)
    }else{
      setFreteWithdraw(false)
    }
  }, [cep])

  return (
    <Container>
      <h2>TOTAL NO CARRINHO</h2>

      <Item>
        <span>Subtotal</span>

        <strong>
          {
            new Intl.NumberFormat('pt-BR',{
              style: "currency",
              currency:"BRL"
            }).format(total)  
          }
        </strong>
      </Item>      

      {
        viewDeliveryBox ? (
          daysFrete ? (
            <Item>
              <span>Valor do Frete:</span>
              <strong>
                {
                  new Intl.NumberFormat('pt-BR',{
                    style: "currency",
                    currency:"BRL"
                  }).format(valueFrete)  
                }
              </strong>

              <span>Dias para entrega:</span>
              <strong>{daysFrete === 0.00001 ? "Retirada no local" : `${daysFrete} Dias` }</strong>
            </Item>
          ) : (
            <DeliveryContainer>
              <span>Digite seu endereço para ver as opções de entrega.</span><br/><br/>

              <div>
                <input type="radio" id="sedex" name="type" value="sedex" selected={true} onClick={() => setSelectTypeDelivery('sedex')}/>
                <label htmlFor="sedex">Sedex</label><br/>
                <input type="radio" id="pac" name="type" value="pac" onClick={() => setSelectTypeDelivery('pac')}/>
                <label htmlFor="pac">Pac</label><br/>
                {
                  freteWithdraw ? (
                    <>
                      <input type="radio" id="ret" name="type" value="ret" onClick={() => setSelectTypeDelivery('ret')}/>
                      <label htmlFor="ret">Retirar no local</label><br/>
                    </>
                  ): null
                }
              </div>

              <input className="inputCEP" type="text" placeholder="Digite seu CEP (Apenas numeros)" value={cep} onChange={(e) => setCep(e.target.value)}/>
              <button type="submit" onClick={(e) => loadFrete(e)}>Calcular</button>
            </DeliveryContainer>
          )
        ) : (
          <Item>
            <span>Entrega</span>

            <span>Digite seu endereço para ver as opções de entrega.</span>

            <span></span>

            <button type="button" onClick={() => setViewDeliveryBox(true)}>Calcular Frete</button>
          </Item>
        )
      }

      <Item>
        <span>Total</span>

        <strong>
          {
            new Intl.NumberFormat('pt-BR',{
              style: "currency",
              currency:"BRL"
            }).format(Number(total) + Number(valueFrete))  
          }
        </strong>
      </Item>

      <ButtonNext onClick={() => handleNext()}>
        FECHAR COMPRA
      </ButtonNext>
    </Container>
  );
}
  
