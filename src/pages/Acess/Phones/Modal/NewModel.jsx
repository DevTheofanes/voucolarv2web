import {useState, useEffect} from 'react'

import { useUser } from '../../../../hooks/useUser'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput, FieldsContainer } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function NewModel({ isOpen, onRequestClose }) {
  const { token } = useUser();

  const [idMark, setIdMark] = useState("")
  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)

  const [marks, setMarks] = useState([])

  async function loadMarks (){
    const response = await api.get("marks")
    setIdMark(response.data[0].id)
    setMarks(response.data)
  }

  async function handleCreateModel(e){

    e.preventDefault()
    if(!name || !file || !dimensions || !weight || !description){
      return alert("Preencha todos os campos")
    }

    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    data.append('weight', weight);
    data.append('dimensions', dimensions);
    data.append('description', description);
    
    try {
      const response = await api.patch(`marks/${idMark}/models`, data)
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
    loadMarks();
  }, [token])

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Novo modelo">
      <FieldInput>
        <label>Marca</label>
        <select onChange={e => setIdMark(e.target.value)}>
          {
            marks.map(mark => {
              return(
                <option key={mark.id} value={mark.id}>{mark.name}</option>
              )
            })
          } 
        </select>
      </FieldInput>

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
        <label>Imagem para seu modelo</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateModel(e)}>Adicionar modelo</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  