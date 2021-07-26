import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer } from "../../../../components/Modal/FormModal/styles";
import api from "../../../../services/api";
import history from "../../../../services/history";

export function DeleteModel({ isOpen, onRequestClose, model }) {
    async function handleDeleteModel(e){
      e.preventDefault();

      try {
        const response = await api.delete(`models/${model.id}`)
        console.count(response)
        history.go("/acess/models")
      } catch (error) {
        alert(error.response.data.error)
      }
    }

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Apagar modelo">
        <span>Você tem certeza que quer apagar esse modelo?</span>
        <ButtonsContainer>
          <button type="submit" onClick={(e) => handleDeleteModel(e)}>Deletar modelo</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  