import React from 'react';

import {
  BannerComponent,
  BannerInner,
  Background,
  Overlay,
  BannerLayer,
  TextBox,
  TextBoxShadow,
  TextInner,
} from './styles';

function Banner() {
  return (
    <BannerComponent>
      <BannerInner>
        <div>
          <Background />
          <Overlay />
        </div>
        <BannerLayer>
          <TextBox>
            <TextBoxShadow>
              <TextInner>
                <h2>
                  <strong>O Presente ideal</strong>
                </h2>
                <h3>para surpreender quem você gosta!</h3>
                <p>
                  Para maior comodidade, você não enfrenta shoppings! E com
                  presente único personalizado!
                </p>
              </TextInner>
            </TextBoxShadow>
          </TextBox>
        </BannerLayer>
      </BannerInner>
    </BannerComponent>
  );
}

export default Banner;
