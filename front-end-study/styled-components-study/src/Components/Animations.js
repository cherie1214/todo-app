import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


export default class Animations extends Component {
  render() {
    return (
      <Container>
        <h1>Animations</h1>
        <Button>Hello</Button><br />
        <Button danger rotate rotationTime={5}>Hello</Button><br />
      </Container>
    );
  }
}

const Container = styled.div`
    padding:25px 25px 50px;
    width:100%;
    background-color:#f0f0f0;
`

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
    ${props => {
        if(props.rotate){
            return `animation: ${rotateMovement} ${props.rotationTime}s linear 1;`
        }
    }}
`;

const rotateMovement = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;
