import React from 'react';

import { IoIosHome, IoMdPhonePortrait } from "react-icons/io";
import { MdFilterNone } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { VscSymbolColor, VscSymbolMethod } from "react-icons/vsc";

import {Container, Header, Box, LateralMenu, ItemMenu, Content} from './styles'

export const AcessLayout = props => {
  const { children } = props;
  return (
    <Container>
      <Header>
        <span>Olá, Administrador</span>
      </Header>

      <Box>
        <LateralMenu>
          <ItemMenu to="/acess/dashboard">
            <IoIosHome color="#fff" />
            <span>Painel</span>
          </ItemMenu>

          <ItemMenu to="/acess/orders">
            <FiClipboard color="#fff" />
            <span>Pedidos</span>
          </ItemMenu>

          <ItemMenu to="/acess/marks">
            <IoMdPhonePortrait color="#fff" />
            <span>Marcas</span>
          </ItemMenu>
          <ItemMenu to="/acess/models">
            <MdFilterNone color="#fff" />
            <span>Modelos</span>
          </ItemMenu>

          <ItemMenu to="/acess/categories">
            <VscSymbolMethod color="#fff" />
            <span>Categorias</span>
          </ItemMenu>

          <ItemMenu to="/acess/personalize">
            <VscSymbolColor color="#fff" />
            <span>Personalize Rápido</span>
          </ItemMenu>

          <ItemMenu to="/acess/users">
            <FaUser color="#fff" />
            <span>Usuários</span>
          </ItemMenu>
        </LateralMenu>
        <Content>
          {children}
        </Content>
      </Box>
    </Container>
  );
}

