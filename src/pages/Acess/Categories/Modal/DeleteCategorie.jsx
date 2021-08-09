import { FormModal } from '../../../../components/Modal/FormModal';
import { ButtonsContainer } from '../../../../components/Modal/FormModal/styles';
import api from '../../../../services/api';
import history from '../../../../services/history';

export function DeleteCategory({ isOpen, onRequestClose, category }) {
  async function handleDeleteCategory(e){
    e.preventDefault();

    try {
      const { data } = await api.get(`/category/${category.id}/products`)
      const products = data.products;
      
      for (const key in products) {
        if (Object.hasOwnProperty.call(products, key)) {
          const element = products[key];
          const responseDeleteProduct = await api.delete(`products/${element.id}`)
          console.count(responseDeleteProduct)
        }
      }


      const response = await api.delete(`categories/${category.id}`)
      console.count(response)
      history.go("/acess/categories")
    } catch (error) {
      alert(error.response.data.error)
    }
  }
    

  return (
    <FormModal isOpen={isOpen} onRequestClose={onRequestClose} title="Apagar categoria">
      <span>Você tem certeza que quer apagar essa categoria?</span>
      <ButtonsContainer>
        <button type="submit" onClick={(e) => handleDeleteCategory(e)}>Deletar categoria</button>
      </ButtonsContainer>
    </FormModal>
  );
}
  
  