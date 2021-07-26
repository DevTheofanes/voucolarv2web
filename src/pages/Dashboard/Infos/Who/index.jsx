
import { Header } from '../../../../components/Header';
import { TopBar } from '../../../../components/Header/TopBar';

import { 
  Content, 
  BoxTitle, 
  BoxTitleTextBold, 
  BoxTitleTextBottom,
  BoxInfos,
  BoxInfosImage,
  BoxInfosText,
  BoxInfosTextTitle,
  BoxInfosTextSubTitle 
} from './styles'

import ImgWho from '../assets/quem-somos.jpg'

export function InfosWho() {
  return (
    <>
      <TopBar/>
      <Header/>
       <Content>
         <BoxTitle>
           <BoxTitleTextBold>QUEM SOMOS</BoxTitleTextBold>
           <BoxTitleTextBottom>Personalizamos os momentos mais incríveis que você viveu!</BoxTitleTextBottom>
         </BoxTitle>

         <BoxInfos>
          <BoxInfosImage src={ImgWho} alt="Image"/>
            <BoxInfosText>
              <BoxInfosTextTitle>Vou Colar</BoxInfosTextTitle> <br/>
              A VOUCOLAR é uma empresa da área de personalização criativa. Acreditamos que ser diferente é uma questão de escolha e viabilizamos esse ideal aos nossos clientes através de nossos produtos e serviços.<br/><br/>

              Nosso time é formado por profissionais experientes multidisciplinares com DNA empreendedor. Nos preocupamos muito com o atendimento e a qualidade dos nossos produtos e serviços e queremos muito que você tenha uma ótima experiência conosco.<br/><br/>

              Nossa sede fica em Curitiba-PR<br/>
              Rua Desembargador Westphalen, 1949 – Rebouças<br/>
              Telefone: +55 41 3057-4444<br/><br/>

              <BoxInfosTextSubTitle>Nossa Missão</BoxInfosTextSubTitle> <br/><br/>

              Nossa missão é possibilitar aos nossos clientes imprimir sua própria personalidade e marca em variados tipos de superficies de maneira fácil e criativa, usando materia prima de qualidade e ambientalmente correta.<br/><br/>

              <BoxInfosTextSubTitle>Nossa Visão</BoxInfosTextSubTitle><br/><br/>

              Nossa visao é ser a primeira referência na memória das pessoas quando o assunto é personalização criativa de superfícies.<br/>
          </BoxInfosText>
        </BoxInfos>
      </Content>
    </>
  );
}