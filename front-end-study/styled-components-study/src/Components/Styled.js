import React, { Component } from 'react';
import styled from 'styled-components';


export default class Styled extends Component {
  render() {
    return (
      <Container>
        <h1>Styled</h1>
        <Button>Hello</Button><br />
        <Button danger>Hello</Button><br />
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
    padding:25px 25px 50px;
    width:100%;
    background-color:#f0f0f0;
`;

const Button = styled.button`
    display:inline-block;
    border-radius: 50px;
    margin: 5px 0;
    padding: 10px;
    min-width:120px;
    color:#fff;
    font-weight: 600;
    box-shadow: none;
    -webkit-box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    border-style: none;
    cursor:pointer;
    &:active,
    &:focus {
        outline:none;
    }
    background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
`;

const Anchor = Button.withComponent("a").extend`
    text-decoration: none;
    text-align:center;
`;
