import {useState} from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function NewBackground({ isOpen, onRequestClose }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)

  async function handleCreateBackground(e){
    e.preventDefault()
    if(!name || !file){
      return alert("Preencha todos os campos")
    }
    
    console.log(name, file)

    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    data.append('background', true);
    
    try {
      const response = await api.patch('assets', data)
      console.count(response)

      setName("")
      setFile(null)

      history.go("/acess/backgrounds")
    } catch (error) {
      alert(error.response.data.error)
    }
  }
    

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Novo fundo">
      <FieldInput>
        <label>Nome</label>
        <input 
          type="text" 
          placeholder="Nome do fundo" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </FieldInput>

      <FieldInput>
        <label>Imagem para seu fundo</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateBackground(e)}>Adicionar fundo</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  