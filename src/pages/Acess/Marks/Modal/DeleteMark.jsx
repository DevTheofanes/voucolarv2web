import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer } from "../../../../components/Modal/FormModal/styles";
import api from "../../../../services/api";
import history from "../../../../services/history";

export function DeleteMark({ isOpen, onRequestClose, mark }) {
    async function handleDeleteMark(e){
      e.preventDefault();

      try {
        const response = await api.delete(`marks/${mark.id}`)
        console.count(response)
        history.go("/acess/marks")
      } catch (error) {
        alert(error.response.data.error)
      }
    }

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Apagar marca">
        <span>Você tem certeza que quer apagar essa marca?</span>
        <ButtonsContainer>
          <button type="submit" onClick={(e) => handleDeleteMark(e)}>Deletar marca</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  