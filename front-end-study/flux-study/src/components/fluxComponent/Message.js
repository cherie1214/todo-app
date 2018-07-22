import React, { Component } from 'react';
import { Actions } from '../../action';
import { messageStore } from '../../store';
import styles from '../../Style.css';

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : '',
            message : []
        };

        messageStore.onChange = () => {
            this.setState({
                message : messageStore.message
            });
        };
    }

    setText (text) {
        this.setState({
            text : text
        });
    }

    submitMessage () {
        Actions.submitMessage(this.state.text);
    }

    enterFn (e) {
        if(e.key == 'Enter') {
            this.submitMessage();
            e.target.value = '';
        }
    }

    render(){

        const setText = (e) => this.setText(e.target.value);
        const submitMessage = () => this.submitMessage();
        const enterFn = (e) => this.enterFn(e);

        const messages = this.state.message.map((e, i) => {
            return (
            <li key={i}>
                {e.text}
            </li>
            );
        })
        return (
            <div style={{padding:'10px'}}>
                <h2>메세지</h2>
                <br/>
                <input
                    onChange={setText}
                    onKeyPress={enterFn}
                    style={{
                        width:'70%',
                        padding:'10px',
                        display:'inlineBlock'
                    }}
                />
                <button
                    style={{
                        width:'50px',
                        padding:'10px'
                    }}
                    onClick={submitMessage}>전송
                </button>
                <br/>
                <br/>
                총 메세지 : {messages.length} 개가 있습니다
                <br/>
                <ul>{messages}</ul>
            </div>
        );
    }
}
