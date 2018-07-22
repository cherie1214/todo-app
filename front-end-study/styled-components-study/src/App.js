import React, { Component, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Styled from './Components/Styled'
import Animations from './Components/Animations'
import Attributes from './Components/Attributes'
import Theming from './Components/Theming'

injectGlobal`
    * {margin:0; padding:0;}
    body{margin:0; padding:0;}
`

export default class App extends Component {
  render() {
    return (
        <Fragment>
            <Styled />
            <Animations />
            <Attributes />
            <Theming />
        </Fragment>
    );
  }
}
