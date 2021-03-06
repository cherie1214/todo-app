import React from 'react';

export default class Ref extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        };
    }

    doChange(e){
        const key = e.target.name;
        this.setState({
            [key]: e.target.value
        });
    }

    doSubmit(e){
        e.preventDefault();

        if(!this.state.user){
            this.user.focus();
            return;
        }
        if(!this.state.pass){
            this.pass.focus();
            return;
        }
        window.alert(JSON.stringify(this.state))
    }

    render(){
        const doSubmit = e => this.doSubmit(e);
        const doChange = e => this.doChange(e);

        return(
            <div>
                <h2>ref를 배워보자!</h2>

                <form onSubmit={doSubmit}>
                    <label>사용자 이름: <br />
                        <input
                            type='text'
                            name='user'
                            ref={ (i) => {this.user = i} }
                            value={this.state.user}
                            onChange={doChange}
                        />
                    </label><br />
                    <label>비밀번호: <br />
                        <input
                            type='password'
                            name='pass'
                            ref={ (i) => {this.pass = i} }
                            value={this.state.pass}
                            onChange={doChange}
                        />
                    </label><br />
                    <input type='submit' value='전송' />
                </form>
            </div>
        );
    }
}
