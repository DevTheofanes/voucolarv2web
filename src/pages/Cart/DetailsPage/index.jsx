import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { NewHeader } from '../../../components/NewHeader';

import { useCart } from '../../../hooks/useCart';
import { useUser } from '../../../hooks/useUser';

import { PermissionComponent } from './PermissionComponent'
import Title from '../Title'

import {Container, Form, InfoCart, BoxInputDuo, InputSelect, BoxInputOne, BoxInputRadio, Item, InfoTitle, FreteItem, FreteItemContent} from './styles'
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { calculateFrete } from '../../../utils/correios';

export function DetailsCartPage() {
  const { user } = useUser()
  const { cart, total } = useCart()
  let history = useHistory();
  
  const [ name, setName] = useState("")
  const [ surname, setSurname] = useState("")  
  const [ typeOfPeople, setTypeOfPeople] = useState("PF")
  const [ namefirm, setNameFirm] = useState("")
  const [ cnpj, setCnpj] = useState("")
  const [ cpf, setCpf] = useState("")
  const [ cep, setCep] = useState("")
  const [ street, setStreet] = useState("")
  const [ number, setNumber] = useState("")
  const [ complement, setComplement] = useState("")
  const [ neighborhood, setNeighborhood] = useState("")
  const [ city, setCity] = useState("")
  const [ state, setState] = useState("Acre")
  const [ phone, setPhone] = useState("")
  const [ comments, setComments] = useState("")

  const [ addressId, setAddressId] = useState("1")
  const [ addressIdDelivery, setAddressIdDelivery] = useState("1")
  const [ otherAddressVisible, setOtherAddressVisible] = useState(false)
  
  const [ cepDelivery, setCepDelivery ] = useState("")
  const [ streetDelivery, setStreetDelivery ] = useState("")
  const [ numberDelivery, setNumberDelivery ] = useState("")
  const [ complementDelivery, setComplementDelivery ] = useState("")
  const [ neighborhoodDelivery, setNeighborhoodDelivery ] = useState("")
  const [ cityDelivery, setCityDelivery ] = useState("")
  const [ stateDelivery, setStateDelivery ] = useState("Acre")

  const [ frete, setFrete] = useState(0)

  const [ typePay, setTypePay] = useState("")

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  async function loadFrete(){
    if(!typePay){
      return toast.error("Escolha o tipo de entrega")
    }

    const validationOne = cep.length === 8;
    const validationTwo = isNumber(cep);

    if(!validationOne || !validationTwo){
      return toast.error("CEP invalido")
    }

    let option = "04014"

    if(typePay === "pac"){
      option = "04510"
    }

    await calculateFrete({cep: cep, option: option}, setFrete, ()=>{})
  }

  async function createNewAddress(data, delivery){
    try {
      const response = await api.post(`/users/${user.id}/address`, data)
      if(delivery){
        setAddressIdDelivery(response.data.id)
      }else{
        setAddressId(response.data.id)
      }
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  async function handleFinalizar(){
    if(!frete){
      return toast.warn("Calcule o frete para prosseguir.")
    }

    if(!name || !surname || !cep || !street || !number || !complement || !neighborhood || !city || !state || !phone){
      return toast.error("Preencha todos os campos não opcionais")
    }

    if(!cpf && !cnpj){
      return toast.error("Preencha todos os campos não opcionais")
    }

    if(otherAddressVisible){
      if(!cepDelivery || !streetDelivery || !numberDelivery || !complementDelivery || !neighborhoodDelivery || !cityDelivery || !stateDelivery){
        return toast.error("Preencha todos os campos não opcionais") 
      }

      await createNewAddress({name, surname, cep: cepDelivery, street: streetDelivery, nation:"Brasil", number: numberDelivery, state : stateDelivery, phone}, true)
    }

    await createNewAddress({name, surname, cep, street, nation:"Brasil", number, state, phone, comments: comments ? comments : "Vazio"}, false)
    
    let productsIds = ""

    for (const key in cart) {
      if (Object.hasOwnProperty.call(cart, key)) {
        const element = cart[key];
        productsIds += element.name
        productsIds += "_"
        productsIds += element.nameMark
        productsIds += "_"
        productsIds += element.id
        if(key + 1 < cart.length){
          productsIds += ","
        }
      }
    }

    try {
      const response = await api.post(`/users/${user.id}/orders`, {addressId, addressIdDelivery: addressIdDelivery ? addressIdDelivery : addressId, productsIds, frete, subTotal: total, total: total + 0, comments: comments ? comments : "Vazio" })
      console.log(response.data)
      history.push("/shopFinish", {order : response.data, methodPayment: typePay})
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  return (
    <>
      {
        user ? (
          <>
            <NewHeader title="Finalizar compra"/>
            <Title active="Details"/>
            <Container>
              <Form>
                <h4>Detalhes de Faturamento</h4>

                <BoxInputDuo>
                  <div>
                    <span>Nome: </span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div>
                    <span>Sobrenome: </span>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                  </div>
                </BoxInputDuo>

                <InputSelect>
                  <span>Tipo de pessoa:</span>
                  <select onChange={e => setTypeOfPeople(e.target.value)}>
                    <option value="PF">Pessoa Fisica</option>
                    <option value="PJ">Pessoa Juridica</option>
                  </select>
                </InputSelect>

                {
                  typeOfPeople === "PF" ? (
                    <BoxInputOne>
                      <span>CPF: </span>
                      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    </BoxInputOne>
                  ) : (
                    <>
                      <BoxInputOne>
                        <span>Nome da empresa: </span>
                        <input type="text" value={namefirm} onChange={(e) => setNameFirm(e.target.value)}/>
                      </BoxInputOne>

                      <BoxInputOne>
                        <span>CNPJ: </span>
                        <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
                      </BoxInputOne>
                    </>
                  )
                }

                <BoxInputDuo>
                  <div>
                    <span>CEP: </span>
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>
                  </div>
                  <div>
                    <span>Rua: </span>
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                  </div>
                </BoxInputDuo>

                <BoxInputDuo>
                  <div>
                    <span>Numero: </span>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                  </div>
                  <div>
                    <span>Complemento: </span>
                    <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)}/>
                  </div>
                </BoxInputDuo>


                <BoxInputDuo>
                  <div>
                    <span>Bairro: </span>
                    <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/>
                  </div>
                  <div>
                    <span>Cidade: </span>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                  </div>
                </BoxInputDuo>

                <InputSelect>
                  <span>Estado:</span>
                  <select onChange={e => setState(e.target.value)}>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </select>
                </InputSelect>

                <BoxInputOne>
                  <span>Telefone: </span>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </BoxInputOne>

                <BoxInputRadio>
                  <input type="radio" value={otherAddressVisible} onClick={() => setOtherAddressVisible(!otherAddressVisible)}/>
                  <span>Entregar para um endereço diferente?</span>
                </BoxInputRadio>

                {
                  otherAddressVisible ? (
                    <>
                      <BoxInputDuo>
                        <div>
                          <span>CEP: </span>
                          <input type="text" value={cepDelivery} onChange={(e) => setCepDelivery(e.target.value)}/>
                        </div>
                        <div>
                          <span>Rua: </span>
                          <input type="text" value={streetDelivery} onChange={(e) => setStreetDelivery(e.target.value)}/>
                        </div>
                      </BoxInputDuo>

                      <BoxInputDuo>
                        <div>
                          <span>Numero: </span>
                          <input type="text" value={numberDelivery} onChange={(e) => setNumberDelivery(e.target.value)}/>
                        </div>
                        <div>
                          <span>Complemento: </span>
                          <input type="text" value={complementDelivery} onChange={(e) => setComplementDelivery(e.target.value)}/>
                        </div>
                      </BoxInputDuo>


                      <BoxInputDuo>
                        <div>
                          <span>Bairro: </span>
                          <input type="text" value={neighborhoodDelivery} onChange={(e) => setNeighborhoodDelivery(e.target.value)}/>
                        </div>
                        <div>
                          <span>Cidade: </span>
                          <input type="text" value={cityDelivery} onChange={(e) => setCityDelivery(e.target.value)}/>
                        </div>
                      </BoxInputDuo>

                      <InputSelect>
                        <span>Estado:</span>
                        <select onChange={e => setStateDelivery(e.target.value)}>
                          <option value="Acre">Acre</option>
                          <option value="Alagoas">Alagoas</option>
                          <option value="Amapá">Amapá</option>
                          <option value="Amazonas">Amazonas</option>
                          <option value="Bahia">Bahia</option>
                          <option value="Ceará">Ceará</option>
                          <option value="Distrito Federal">Distrito Federal</option>
                          <option value="Espírito Santo">Espírito Santo</option>
                          <option value="Goiás">Goiás</option>
                          <option value="Maranhão">Maranhão</option>
                          <option value="Mato Grosso">Mato Grosso</option>
                          <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                          <option value="Minas Gerais">Minas Gerais</option>
                          <option value="Pará">Pará</option>
                          <option value="Paraíba">Paraíba</option>
                          <option value="Paraná">Paraná</option>
                          <option value="Pernambuco">Pernambuco</option>
                          <option value="Piauí">Piauí</option>
                          <option value="Rio de Janeiro">Rio de Janeiro</option>
                          <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                          <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                          <option value="Rondônia">Rondônia</option>
                          <option value="Roraima">Roraima</option>
                          <option value="Santa Catarina">Santa Catarina</option>
                          <option value="São Paulo">São Paulo</option>
                          <option value="Sergipe">Sergipe</option>
                          <option value="Tocantins">Tocantins</option>
                        </select>
                      </InputSelect>
                    </>
                  ) : null
                }

                <BoxInputOne>
                  <span>Notas do pedido: </span>
                  <textarea value={comments} onChange={e => setComments(e.target.value)}/>
                </BoxInputOne>
              </Form>

              <InfoCart>
                <h4>Seu pedido</h4>
                <InfoTitle>
                  <span>Produto</span>
                  <span>Subtotal</span>
                </InfoTitle>
                {
                  cart.map(item => (
                    <Item key={item.id}>
                      <span>{item.name}, {item.nameMark} x{item.amount}</span>
                      <span>
                        {
                          new Intl.NumberFormat('pt-BR',{
                          style: "currency",
                          currency:"BRL"
                          }).format(item.subtotal)
                        }
                      </span>
                    </Item>
                  ))
                }

                <Item>
                  <label>Subtotal</label>
                  <span>
                    {
                      new Intl.NumberFormat('pt-BR',{
                      style: "currency",
                      currency:"BRL"
                      }).format(total)
                    }
                  </span>
                </Item>
                <FreteItem>
                  <span>Frete</span>
                  <span>
                    {
                      cep ? frete ? (
                        <span className="valueFrete">
                          {
                            new Intl.NumberFormat('pt-BR',{
                            style: "currency",
                            currency:"BRL"
                            }).format(frete)
                          }
                        </span>
                      ) : (
                        <FreteItemContent>
                          <div>
                            <input type="radio" name="typeDelivery" selected={true} id="sedex" onClick={() => setTypePay('sedex')}/>
                            <label>Sedex</label>

                            <input type="radio" name="typeDelivery" id="pac" onClick={() => setTypePay('pac')}/>
                            <label>Pac</label>
                          </div>
                          <button onClick={() => loadFrete()}>Calcular</button>
                        </FreteItemContent>
                      ) : "Informe seu cep"
                    }
                  </span>
                </FreteItem>
                <Item>
                  <label>Total</label>
                  <span>
                  {
                      new Intl.NumberFormat('pt-BR',{
                      style: "currency",
                      currency:"BRL"
                      }).format(Number(total) + Number(frete))
                    }
                  </span>
                </Item>

                <Item className="radioItem">
                  <input type="radio" name="typePay" selected={true} id="cartCredit" onClick={() => setTypePay('cartCredit')}/>
                  <label>Cartão de credito</label>
                </Item>
                <Item className="radioItem">
                  <input type="radio" name="typePay" id="ticket" onClick={() => setTypePay('ticket')}/>
                  <label>Boleto</label>
                </Item>

                <button onClick={() => handleFinalizar()}>Finalizar Compra</button>

                <p>
                  Seus dados pessoais serão usados para processar seu pedido, dar suporte à sua experiência em todo este site e para outros fins descritos em nossa política de privacidade.
                </p>
              </InfoCart>
            </Container>
          </>
        ) : <PermissionComponent />}
    </>
  );
}
