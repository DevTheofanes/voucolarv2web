import { BiUser, BiCart } from "react-icons/bi";
import { Container } from "./styles";

import Logo from '../../assets/voucolar.png'
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

export function NewHeader({ title, border }) {
  const { quantity } = useCart()

  const { user } = useUser()
  
  return (
    <Container border={border}>
      <a href="/"><img src={Logo} alt="Vou colar"/></a>

      {
        title ? (
          <h1>{title}</h1>
        ) : <h1></h1>
      }

      <div>
        <a href={
          user ? "/user" : "/user/login"
        } className="userIconInHeader"><BiUser size={32} color="#707070" /></a>
        <a href="/cart">
          <BiCart size={32} color="#707070" />
          {
            quantity ? (
              <span>{quantity}</span>
            ) : null
          }
        </a>
      </div>
    </Container>
  );
}