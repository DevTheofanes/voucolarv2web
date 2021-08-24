import { useState, useEffect } from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput, FormInfo } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';
import {useUser} from '../../../../hooks/useUser'

export function ValueProduct({ isOpen, onRequestClose }) {
  const {token} = useUser()
  const [value, setValue] = useState(0)
  const [valuePast, setValuePast] = useState(0)

  async function handleUpdateValue(e){
    e.preventDefault()
    if(!value){
      return alert("Informe o valor desejado")
    }
    
    try {
      const response = await api.put('valueCustomization', {value})
      setValuePast(value)
      setValue("")

      history.go("/acess/personalize")
    } catch (error) {
      // console.alert(error.response.data.error)
    }
  }

  async function loadValuePast(){
    try {
      const response = await api.get('valueCustomization')

      setValuePast(response.data.value)
    } catch (error) {
      // alert(error.response.data.error)
    }
  }
    
  useEffect(()=> {
    loadValuePast()
    
    if(token){
      api.defaults.headers.authorization = token
    }
  }, [isOpen, token])

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Valor do produto">
      <FormInfo>
        {
          `Atualmente o valor de uma capinha personalizada é de ${
            new Intl.NumberFormat('pt-BR', {
              style: "currency",
              currency: "BRL"
            }).format(valuePast)
          }
        `}
      </FormInfo>

          <br/>
          <br/>

      <FieldInput>
        <label>Valor</label>
        <input 
          type="number" 
          placeholder="Novo valor" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleUpdateValue(e)}>Atualizar valor</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  