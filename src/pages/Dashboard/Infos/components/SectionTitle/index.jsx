/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Title } from './styles';

export default class SectionTitle extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          <b></b>
          <span>{this.props.title}</span>
          <b></b>
        </Title>
      </Container>
    );
  }
}
