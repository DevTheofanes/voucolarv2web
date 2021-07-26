import { MdRemoveShoppingCart } from "react-icons/md";

import { Container } from './styles';

export function CartEmpty() {

  return (
    <Container>
      <h1>Carrinho Vazio</h1>
      <p>Adicione um produto ao carrinho, para prosseguir</p>

      <MdRemoveShoppingCart size={100} />
    </Container>
  )
}

