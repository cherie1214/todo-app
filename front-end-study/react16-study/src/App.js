import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
    const { pizzas } = state;
    if(pizzas < MAX_PIZZAS){
        return{
            pizzas: pizzas + 1
        }
    } else {
        return null; // 컴포넌트를 더 이상 업데이트 하지 않음
    }
}

class Controlled extends Component {
    state = {
        pizzas: 0
    };
    render(){
        const { pizzas } = this.state;
        return(
            <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
                    pizzas ===1 ? "pizza" : "pizzas"
                }`}</button>
        )
    }
    _handleClick = () => {
        this.setState(eatPizza);
    }
}

const BoundaryHOC = (ProtectedComponent) => class Boundary extends Component {
    state = {
        hasError: false
    }
    componentDidCatch = () => {
        this.setState({
            hasError: true,
        })
    }
    render(){
        const { hasError } = this.state;
        if(hasError){
            return <ErrorFallBack />
        } else {
            return <ProtectedComponent />
        }
    }
}

class ErrorMaker extends Component {
    state = {
        friends: ["aaa", "bbb", "ccc", "ddd"]
    };
    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             friends: undefined,
    //         })
    //     }, 2000);
    // }
    render(){
        const { friends } = this.state;
        return(
            friends.map(friend => ` ${friend} `)
        )
    }
}
const PErrorMaker = BoundaryHOC(ErrorMaker)

class UseFragment extends Component {
    render(){
        return(
            <Fragment>
                <header>헤더</header>
                <div>div</div>
                <footer>푸터</footer>
            </Fragment>
        )
    }
}
const PUseFragment = BoundaryHOC(UseFragment)

class ReturnString extends Component {
    render(){
        return "hello!"
    }
}
const PReturnString = BoundaryHOC(ReturnString)

class Portals extends Component {
    render(){
        return createPortal(<Message />, document.getElementById("touchme"));
    }
}
const Message = () => "Just touched it!";
const PPortals = BoundaryHOC(Portals)


const ErrorFallBack = () => {
    return " sorry something went wrong"
}

class App extends Component {
    // state = {
    //     hasError: false
    // }
    // componentDidCatch = (error, info) => {
    //     console.log(`catched ${error} the info I have is ${JSON.stringify(info)}`)
    //     this.setState({
    //         hasError: true,
    //     })
    // }
  render() {
    // const { hasError } = this.state;
    return (
      <Fragment>
          <PUseFragment />
          <PReturnString />
          <PPortals />
          {/*hasError ? <ErrorFallBack /> : <ErrorMaker />*/}
          <PErrorMaker />
          <Controlled />
      </Fragment>
    );
  }
}
export default BoundaryHOC(App);
