import React, { Component } from 'react';
import { Actions } from '../../action';
import { nameStore, mentStore } from '../../store';
import styles from '../../Style.css';

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ment: ''
        };
        nameStore.onChange = () => {
            this.setState({
                name: nameStore.name
            });
        };
        mentStore.onChange = () => {
            this.setState({
                ment: mentStore.ment
            });
        };
    }

    enterFn (e) {
        if(e.key == 'Enter') {
            Actions.submitName();
        }
    }

    render(){

        const enterFn = (e) => this.enterFn(e);

        return (
            <div style={{padding:'10px'}}>
                <h2>이름 입력</h2>

                <input
                    value={this.state.name}
                    onKeyPress={enterFn}
                    onChange={ (e) => Actions.changeName(e.target.value)}
                />
                <button onClick={ (e) => Actions.submitName() }>등록</button>
                <p>{this.state.ment}</p>
            </div>
        );
    }
}
