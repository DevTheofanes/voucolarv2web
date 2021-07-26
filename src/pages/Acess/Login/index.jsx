import React from 'react';
import { useUser } from "../../../hooks/useUser"

import {Container, Main} from './styles'

export const AcessLogin  = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");  
    
    const {handleSession} = useUser()

    async function handleLogin (){
        handleSession({ email, password })
    }

    return(
        <Container>
            <Main>
                <h1>Entrar no painel</h1>
                <div>
                    <span>Email:</span>
                    <input type="text" value={email}
                        onChange={(e) => {
                        e.preventDefault(e)
                        setEmail(e.target.value)
                    }} />
                </div>
                <div>
                    <span>Senha:</span>
                    <input type="password" value={password}
                        onChange={(e) => {
                        e.preventDefault(e)
                        setPassword(e.target.value)
                    }} />
                </div>

                <footer>
                    <button type="button" onClick={handleLogin}>Entrar</button>
                </footer>
            </Main>
        </Container>
    )
}