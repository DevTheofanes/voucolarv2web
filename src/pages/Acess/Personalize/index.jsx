import { useState, useEffect } from 'react';
import { AcessLayout as Container } from '../index'
import { HeaderContent } from '../styles'
import { ValueProduct } from './Modal';

import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';

import { ItemContainer, Item } from './styles';

export function AcessPersonalize() {
  const {token} = useUser()

  const [isValueProductOpen, setIsValueProductOpen] = useState(false)
  const handleOpenValueProductModal = () => setIsValueProductOpen(true)
  const handleCloseValueProductModal = () => setIsValueProductOpen(false)

  useEffect(()=> {    
    if(token){
      api.defaults.headers.authorization = token
    }
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Personalizar Rápido</span>

        <button type="button" onClick={() => handleOpenValueProductModal()}>
          <label>Valor da capinha personalizada</label>
        </button>  
      </HeaderContent>

      <ItemContainer>
        <Item to={`/acess/background`}>
          <img src="https://img.freepik.com/vetores-gratis/projeto-de-fundo-escuro-abstrato-de-meio-tom_1017-15505.jpg?size=338&ext=jpg" alt={"Categoria"}/>
          <span>Fundos</span>
        </Item>

        <Item to={`/acess/figures`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1WP2mjDK-_VzVh8mwr1UA46BHqOiOVsm4HYtFEu7C2Q-rDsj1O3IsHm775IN9jThlEg&usqp=CAU" alt={"Categoria"}/>
          <span>Figurinhas</span>
        </Item>
      </ItemContainer>

      <ValueProduct isOpen={isValueProductOpen} onRequestClose={handleCloseValueProductModal}/>
    </Container>
  );
}

