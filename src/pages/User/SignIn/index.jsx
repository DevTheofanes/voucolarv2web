import { useEffect, useState } from 'react';

import { useUser } from '../../../hooks/useUser'

import { NewHeader } from '../../../components/NewHeader'

import { Container, Content } from './styles';


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSession, user } = useUser()

  async function handleLogin(){
    handleSession({ email, password })
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <>
      <NewHeader />

      <Container>
        <Content>
          <h3>FAZER LOGIN</h3>

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

          <button type="button" onClick={() => handleLogin()}>ENTRAR</button>

          <span>Não tem uma conta? <a href="/user/register">Cadastre-se</a></span>

          {/* <ButtonEntryWith>Entrar com Facebook</ButtonEntryWith>
          <ButtonEntryWith>Entrar com Google</ButtonEntryWith> */}
        </Content>
      </Container>
    </>
  );
}
