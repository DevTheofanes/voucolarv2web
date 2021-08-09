import { useState, useEffect } from 'react'

import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer, FieldInput } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function EditCategory({ isOpen, onRequestClose, category }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)

  async function handleCreateCategory(e){
    e.preventDefault()

    if(file){
      const data = new FormData();
      data.append('image', file);

      try {
        const response = await api.put(`categories/${category.id}`, data)
        console.count(response)
        
      } catch (error) {
        alert.log(error.response.data.error)
      }
    }

    try {
      const response = await api.put(`categories/put/${category.id}`, { name })
      console.count(response)
      history.go("/acess/marks")
      
    } catch (error) {
      alert.log(error.response.data.error)
    }
  }
  
  useEffect(() => {
    setName(category.name)
  }, [category])

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Editar categoria">
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
        <label>Troque a imagem de sua categoria</label>
        <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
      </FieldInput>

      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleCreateCategory(e)}>Editar categoria</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  