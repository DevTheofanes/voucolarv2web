import { useState, useEffect } from 'react';

import {
  ItemsTitle,
  ItemsWrapper,
  TextAndColor,
  CustomizeContent,
} from '../../components/styles';

import history from '../../../../services/history';

import { useCustomize } from '../../../../hooks/useCustomize';

export const CustomizeText = () => {
  const { 
    text, setText,
    color, setColor,
    currentStep,
    currentFont,
    setCurrentFont,
    availableFonts,
    loadGoogleFonts
  } = useCustomize();

  const handleChangeText = (localText) => {
    setText(localText);
  };

  const handleChangeColor = (localColor) => {
    setColor(localColor);
  };

  const handleSelected = (fontFamily) => {
    setCurrentFont(fontFamily);
  };

  useEffect(() => {
    loadGoogleFonts();
  }, []);

  return (
    <CustomizeContent>
      <ItemsWrapper>
        <ItemsTitle>
          Adicione texto
        </ItemsTitle>
        
        <form className="formText">
          <TextAndColor>
            <input type="text" value={text} onChange={(e) => handleChangeText(e.target.value)} placeholder="Escreva seu texto aqui"/>
            <input type="color" value={color} onChange={(e) => handleChangeColor(e.target.value)} placeholder="Escolha a cor"/>
          </TextAndColor>

          <select value={currentFont} onChange={e => handleSelected(e.target.value)}>
            <option value="0">Escolha a Fonte</option>
            {
              availableFonts && availableFonts.map(font => (
                <option key={font.name} value={font.name} style={{ fontSize: 16, fontFamily: font.name }}>{font.name}</option>
              ))
            }
          </select>
        </form>
      </ItemsWrapper>
    </CustomizeContent>
  );
}

