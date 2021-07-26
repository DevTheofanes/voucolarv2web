import {useState} from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function NewFigures({ isOpen, onRequestClose }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)

  async function handleCreateFigures(e){
    e.preventDefault()
    if(!name || !file){
      return alert("Preencha todos os campos")
    }
    
    console.log(name, file)

    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    
    try {
      const response = await api.patch('assets', data)
      console.count(response)

      setName("")
      setFile(null)

      history.go("/acess/figures")
    } catch (error) {
      alert(error.response.data.error)
    }
  }
    

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Nova Figurinha">
      <FieldInput>
        <label>Nome</label>
        <input 
          type="text" 
          placeholder="Nome da figurinha" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </FieldInput>

      <FieldInput>
        <label>Imagem para sua figurinha</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateFigures(e)}>Adicionar figurinha</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  