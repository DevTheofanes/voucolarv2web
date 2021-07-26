import { useEffect } from 'react';

import {
  CustomizeContent,
  Item,
  Items,
  ItemsTitle,
  ItemsWrapper,
} from '../../components/styles';

import { useUser } from "../../../../hooks/useUser"
import { useCustomize } from '../../../../hooks/useCustomize';

export const CustomizeBackground = (props) => {
  const { host, token } = useUser();

  const {
    modelDetail,
    setPhoto,
    setBackground,
    availableBackgrounds,
    loadBackgrounds
  } = useCustomize();

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    
    loadBackgrounds();
  }, [token]);

  const handleOption = (image) => {
    setPhoto(null);
    setBackground(image);
  };

  return (
    <CustomizeContent>
      <ItemsWrapper>
        <ItemsTitle>
          Fundos
        </ItemsTitle>
        <Items>
          { 
            modelDetail ? (
              <Item
                className="--background"
                onClick={() => handleOption(null)}
              >
                <img src={`${modelDetail.imagePath}`}/>
              </Item>
            ) : ''
          }
          {
            availableBackgrounds.map(background =>{
              return(
                <Item
                  className="--background"
                  key={background.id}
                  onClick={() => handleOption(background.image)}
                  style={{ backgroundImage: `url(${background.imagePath})` }}
                >
                  <img src={`${modelDetail.imagePath}`} alt={background.name}/>
                </Item>
              )
            })
          }
        </Items>
      </ItemsWrapper>
    </CustomizeContent>
  );
}

