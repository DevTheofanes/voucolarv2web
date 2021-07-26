import { useEffect, useState } from "react";

import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer, FieldInput } from "../../../../components/Modal/FormModal/styles";

import api from "../../../../services/api";
import history from "../../../../services/history";

export function EditMark({ isOpen, onRequestClose, mark }) {
  const [name, setName] = useState("")
  const [file, setFile] = useState(null)
   
  async function handleUpdateMark(e){
    e.preventDefault()

    if(file){
      const data = new FormData();
      data.append('image', file);

      try {
        const response = await api.put(`marks/${mark.id}`, data)
        console.count(response)
        
      } catch (error) {
        alert.log(error.response.data.error)
      }
    }

    try {
      const response = await api.put(`marks/put/${mark.id}`, { name })
      console.count(response)
      history.go("/acess/marks")
      
    } catch (error) {
      alert.log(error.response.data.error)
    }
  }

    useEffect(() => {
      setName(mark.name)
    }, [mark])
    

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Editar marca">
        <FieldInput>
          <label>Nome</label>
          <input 
            type="text" 
            placeholder="Nome da marca" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FieldInput>

        <FieldInput>
          <label>Troque a imagem de sua marca</label>
          <input type="file" className="file" onChange={(e) => setFile(e.target.files[0])}/>
        </FieldInput>

        <ButtonsContainer>
          <button type="submit" onClick={(e)=> handleUpdateMark(e)}>Alterar marca</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  