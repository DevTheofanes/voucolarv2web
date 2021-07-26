import { FormModal } from "../../../../components/Modal/FormModal";
import { ButtonsContainer } from "../../../../components/Modal/FormModal/styles";
import api from "../../../../services/api";
import history from "../../../../services/history";

export function DeleteProduct({ isOpen, onRequestClose, product }) {
    async function handleDeleteProduct(e){
      e.preventDefault();

      try {
        const response = await api.delete(`products/${product.id}`)
        console.count(response)
        history.go("/acess/products")
      } catch (error) {
        alert(error.response.data.error)
      }
    }

    return (
    	<FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Apagar produto">
        <span>Você tem certeza que quer apagar esse produto?</span>
        <ButtonsContainer>
          <button type="submit" onClick={(e) => handleDeleteProduct(e)}>Deletar produto</button>
        </ButtonsContainer>
      </FormModal>
    );
  }
  
  