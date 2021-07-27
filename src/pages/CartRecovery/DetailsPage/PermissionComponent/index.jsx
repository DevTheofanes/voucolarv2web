import { FiLogIn } from 'react-icons/fi';

import { NewHeader } from '../../../../components/NewHeader';
import { Container } from './styles';

export function PermissionComponent() {
  return (
    <>
      <NewHeader />
      <Container>
        <h1>Para continuar a compra</h1>
        <h2>Você precisa fazer Login</h2>

        <FiLogIn color="#333" size={40}/>

        <a href="user/login"><button>Ir para Login</button></a>
      </Container>
    </>
  );
}