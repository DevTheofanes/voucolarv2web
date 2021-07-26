import { useState } from 'react';

import { NewHeader } from '../../../components/NewHeader'
import { useUser } from '../../../hooks/useUser';

import { Container, Content } from './styles';

export function Register() {
  const { handleRegister } = useUser()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NewHeader />

      <Container>
        <Content>
          <h3>CRIAR NOVA CONTA</h3>

          <input 
            type="text"
            placeholder="Digite aqui seu nome:"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />

          <input 
            type="email"
            placeholder="Digite aqui seu email:"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />

          <input 
            type="password"
            placeholder="Digite aqui sua senha:"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          
          <button type="button" onClick={() => handleRegister({
            name,
            email,
            password,
            manager: false
          })}>CADASTRAR</button>

          <span>Já tem uma conta? <a href="/user/login">Fazer Login</a></span>

          {/* <ButtonEntryWith>Entrar com Facebook</ButtonEntryWith>
          <ButtonEntryWith>Entrar com Google</ButtonEntryWith> */}
        </Content>
      </Container>
    </>
  );
}
