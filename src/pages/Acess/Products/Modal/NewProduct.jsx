import { useEffect, useState } from 'react'

import { useUser } from '../../../../hooks/useUser'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput, FieldsContainer } from '../../../../components/Modal/FormModal/styles';
import { InputSelectCustomized } from '../../../../components/InputSelectPersonalized'
import api from '../../../../services/api';
import history from '../../../../services/history';

export function NewProduct({ isOpen, onRequestClose, id }) {
  const { token } = useUser()

  const [models, setModels] = useState([])
  const [selected, setSelected] = useState([])

  const [name, setName] = useState("")
  const [file, setFile] = useState(null)
  const [value, setValue] = useState(0)
  const [valueNotDiscount, setValueNotDiscount] = useState(0)

  function formattedIdsModels(){
   let arrayIds = []

    for (const key in selected) {
      if (Object.hasOwnProperty.call(selected, key)) {
        const elementSub = selected[key];
        
        let id = null;

        for (const model in models) {
          if (Object.hasOwnProperty.call(models, model)) {
            const element = models[model];
        
            
            if(element.name === elementSub){
              id = element.id
            }
          }
        }

        if(id){
          arrayIds.push(id)
        }
      }
    }
    
    return arrayIds.toString()
  }

  async function handleCreateProduct(e){
    const idsModelsWithoutCustomization = formattedIdsModels()

    e.preventDefault()
    if(!name || !file || !value){
      return alert("Preencha todos os campos")
    }

    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    data.append('value', value);
    data.append('valueNotDiscount', valueNotDiscount);
    data.append('idsModelsWithoutCustomization', idsModelsWithoutCustomization);

    // const data = {
    //   name,
    //   file,
    //   value,
    //   valueNotDiscount,
    //   idsModelsWithoutCustomization
    // }
    // console.log(data)

    
    try {
      const response = await api.patch(`category/${id}/products`, data)
      console.count(response)

      setName("")
      setFile(null)
      setValue(0)
      setValueNotDiscount(0)
      setSelected([])

      history.go("/acess/products")
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  async function loadModels(){
    const response = await api.get('models')

    setModels(response.data)
  }
  
  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE4MjU2Mzg2LCJleHAiOjE2MTg4NjExODZ9.gsx8MYDq3_DcobF8p-6Q9n7pSC0jjrh4VbxddVxI3c0`;
    loadModels()
  }, [ token ])

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Novo produto">
      <FieldInput>
        <label>Nome</label>
        <input 
          type="text" 
          placeholder="Nome do produto" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </FieldInput>

      <FieldsContainer>
        <FieldInput>
          <label>Valor</label>
          <input 
            type="number" 
            placeholder="Valor da capinha" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
          />
        </FieldInput>

        <FieldInput className="secondInput">
          <label>Valor sem desconto</label>
          <input 
            type="number" 
            placeholder="Valor sem desconto" 
            value={valueNotDiscount} 
            onChange={(e) => setValueNotDiscount(e.target.value)}
          />
        </FieldInput>
      </FieldsContainer>

      <InputSelectCustomized data={models} selectedItems={selected} setSelected={setSelected} />

      <FieldInput>
        <label>Imagem para seu produto</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateProduct(e)}>Adicionar produto</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  