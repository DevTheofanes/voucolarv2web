import React from 'react';

import SectionTitle from '../../components/SectionTitle/index.jsx';
import Banner from './Banner/index.jsx';
import Section from './Section/index.jsx';
import {
  MainComponent,
  Content,
  RowMain,
  Large12Col,
  ColInner,
} from './styles';

export function Main() {
  return (
    <MainComponent>
      <Content>
        <RowMain>
          <Large12Col>
            <ColInner>
              <Banner />
              <SectionTitle title="Como funciona" />
              <Section />
            </ColInner>
          </Large12Col>
        </RowMain>
      </Content>
    </MainComponent>
  );
}


