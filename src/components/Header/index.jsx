import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

import { IoCart } from "react-icons/io5";

import Logo from '../../assets/voucolar.png'
import { 
  Container, 
  Content, 
  // Infos, 
  ActionsContainer, 
  ButtonEntry, 
  ButtonCart } 
  from "./styles";

export function Header() {
  const { total } = useCart()
  const { user } = useUser();

  return (
    <Container>
      <a href="/"><img src={Logo} alt="Vou Colar"/></a>

      <Content>
        {/* <Infos>
          <a href="/infos/present">Vale-Presente</a>
          <a href="https://voucolar.com.br/brindes-personalizados-para-empresas/">Para Empresas</a>
        </Infos> */}

        <ActionsContainer>
          {
            user ? (
              <a href="/user">
                <ButtonEntry>
                  <span>{user.name}</span>
                </ButtonEntry>
              </a>
            ) : (
              <a href="/user/login">
                <ButtonEntry>
                  <span>Entrar</span>
                </ButtonEntry>
              </a>
            )
          }
          
          <ButtonCart>
            <a href="/cart">
              CARRINHO / {
                new Intl.NumberFormat('pt-BR',{
                  style: "currency",
                  currency:"BRL"
                }).format(total)  
              }
            </a>
            <IoCart size="18px" color="#c1c2c2"/>
          </ButtonCart>
        </ActionsContainer>
      </Content>
    </Container>
  );
}
      
      
