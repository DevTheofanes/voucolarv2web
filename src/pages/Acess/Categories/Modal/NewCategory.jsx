import { useState } from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function NewCategory({ isOpen, onRequestClose }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)

  async function handleCreateCategory(e){
    e.preventDefault()
    if(!name || !file){
      return alert("Preencha todos os campos")
    }
    
    console.log(name, file)

    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    
    try {
      const response = await api.patch('categories', data)
      console.count(response)

      setName("")
      setFile(null)

      history.go("/acess/categories")
    } catch (error) {
      alert(error.response.data.error)
    }
  }
    

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Nova categoria">
      <FieldInput>
        <label>Nome</label>
        <input 
          type="text" 
          placeholder="Nome da categoria" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </FieldInput>

      <FieldInput>
        <label>Imagem para representar sua categoria</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateCategory(e)}>Adicionar categoria</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  