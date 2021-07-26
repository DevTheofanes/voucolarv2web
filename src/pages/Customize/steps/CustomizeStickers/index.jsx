import { useEffect } from 'react';

import {
  CustomizeContent,
  Item,
  Items,
  ItemsTitle,
  ItemsWrapper,
} from '../../components/styles';

import history from '../../../../services/history';

import { useUser } from '../../../../hooks/useUser';
import { useCustomize } from '../../../../hooks/useCustomize';

export const CustomizeStickers = (props) => {
  const { host, token } = useUser();
  const {
    setSticker,
    currentStep,
    loadStickers,
    availableStickers,
  } = useCustomize();

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadStickers();
  }, [token]);

  const handleOption = (image) => {
    setSticker(image);
  };

  return (
    <CustomizeContent>
      <ItemsWrapper>
        <ItemsTitle>
          STICKERS E PERSONALIZAÇÃO
        </ItemsTitle>

        <Items>
        {
          availableStickers.map(sticker =>{
            return(
              <Item className="--sticker" key={sticker.id} onClick={() => handleOption(sticker.image)}>
                <img src={`${host}/files/${sticker.image}`}/>
              </Item>
            )
          })
        }
        </Items>
      </ItemsWrapper>
    </CustomizeContent>
  );
}

