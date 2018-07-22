import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const awesomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    padding:20px;
    border:none;
    border-radius: 5px;
    appearance:none;
    -webkit-appearance:none;
`

export default class Attributes extends Component {
  render() {
    return (
      <Container>
        <h1>Attributes</h1>
        <Input placeholder="Hello"></Input>
      </Container>
    );
  }
}

const Container = styled.div`
    padding:25px 25px 50px;
    width:100%;
    background-color:#f0f0f0;
`;

const Input = styled.input.attrs({
    required: true,
})`
    ${awesomeCard}
`;
