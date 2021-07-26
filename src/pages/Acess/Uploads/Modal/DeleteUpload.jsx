import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer } from "../../../../components/Modal/FormModal/styles";
import api from "../../../../services/api";
import history from "../../../../services/history";

export function DeleteUpload({ isOpen, onRequestClose, asset }) {
    async function handleDeleteUpload(e){
      e.preventDefault();

      try {
        const response = await api.delete(`assets/${asset.id}`)
        console.count(response)
        history.go("/acess/assets")
      } catch (error) {
        alert(error.response.data.error)
      }
    }

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Apagar imagem">
        <span>Você tem certeza que quer apagar essa imagem?</span>
        <ButtonsContainer>
          <button type="submit" onClick={(e) => handleDeleteUpload(e)}>Deletar imagem</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  