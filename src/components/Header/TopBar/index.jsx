import { FaWhatsapp } from "react-icons/fa";
import { Button, Container, TextLink } from "./styles";

export function TopBar() {
  return (
    <Container>
        <TextLink to="/infos/who">Quem nos somos</TextLink>

        <Button>
          <FaWhatsapp color="#fff" size=".9rem"/>
          <span>41 98867-0445</span>
        </Button>
    </Container>
  );
}
      
      