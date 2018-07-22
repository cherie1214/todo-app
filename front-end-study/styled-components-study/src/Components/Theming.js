import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme'
import { Container } from '../CommonStyle'


export default class Theming extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
          <Container>
            <h1>Theming</h1>
            <Form />
            <Form />
          </Container>
        </ThemeProvider>
    );
  }
}

const Card = styled.div`
    ${Button}{
        color:#fff;
    }
`;

const Button =  styled.button`
    border-radius: 50%;
    width:80px;
    height:80px;
    border:none;
    background-color: ${props => props.theme.successColor};
`;





const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

// 위와 같은 소스
// const Form = () => {
//     return(
//         <Card>
//             <Button>Hello</Button>
//         </Card>
//     )
// };
