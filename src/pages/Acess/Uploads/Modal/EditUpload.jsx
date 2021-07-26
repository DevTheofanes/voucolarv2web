import { useEffect, useState } from "react";

import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer, FieldInput } from "../../../../components/Modal/FormModal/styles";

import api from "../../../../services/api";
import history from "../../../../services/history";

export function EditUpload({ isOpen, onRequestClose, asset }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)
   
  async function handleUpdateUpload(e){
    e.preventDefault()

    if(file){
      const data = new FormData();
      data.append('image', file);

      try {
        const response = await api.put(`assets/${asset.id}`, data)
        console.count(response)
        
      } catch (error) {
        alert.log(error.response.data.error)
      }
    }

    try {
      const response = await api.put(`assets/put/${asset.id}`, { name })
      console.count(response)
      history.go("/acess/assets")
      
    } catch (error) {
      alert.log(error.response.data.error)
    }
  }

    useEffect(() => {
      setName(asset.name)
    }, [asset])
    

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Editar imagem">
        <FieldInput>
          <label>Nome</label>
          <input 
            type="text" 
            placeholder="Nome da imagem" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FieldInput>

        <FieldInput>
          <label>Troque a imagem de sua imagem</label>
          <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
        </FieldInput>

        <ButtonsContainer>
          <button type="submit" onClick={(e)=> handleUpdateUpload(e)}>Alterar imagem</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  