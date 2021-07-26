import {useState, useEffect} from 'react'

import { useUser } from '../../../../hooks/useUser'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput, FieldsContainer } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function EditModel({ isOpen, onRequestClose, model }) {
  const { token } = useUser()

  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  
  async function handleUpdateModel(e){
    e.preventDefault()
    if(!name || !dimensions || !weight || !description){
      return alert("Preencha todos os campos")
    }

    if(file){
      const data = new FormData();
      data.append('image', file);
      
      try {
        const response = await api.put(`models/${model.id}`, data)
        console.count(response)

      } catch (error) {
        alert(error.response.data.error)
      }
    }

    const data = {
      name,
      dimensions,
      weight,
      description
    }
    
    try {
      const response = await api.put(`models/put/${model.id}`, data)
      console.count(response)

      setName("")
      setFile(null)
      setWeight("")
      setDimensions("")
      setDescription("")

    } catch (error) {
      alert(error.response.data.error)
    }

      history.go("/acess/models")
  }
  
  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    
    setName(model.name)
    setDescription(model.description)
    setDimensions(model.dimensions)
    setWeight(model.weight)
  }, [model, token])

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Editar modelo">
      <FieldInput>
        <label>Nome</label>
        <input 
          type="text" 
          placeholder="Nome do modelo" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </FieldInput>

      <FieldsContainer>
        <FieldInput>
          <label>Peso</label>
          <input 
            type="text" 
            placeholder="Peso da capinha" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
          />
        </FieldInput>

        <FieldInput className="secondInput">
          <label>Dimensões</label>
          <input 
            type="text" 
            placeholder="Dimensões da capinha" 
            value={dimensions} 
            onChange={(e) => setDimensions(e.target.value)}
          />
        </FieldInput>
      </FieldsContainer>

      <FieldInput className="textAreaInput">
        <label>Descrição</label>
        <textarea 
          type="text"
          placeholder="Descrição da capinha" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </FieldInput>

      <FieldInput>
        <label>Troque a imagem do seu modelo</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleUpdateModel(e)}>Alterar modelo</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  