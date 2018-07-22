import React, { Component, Fragment } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : [0,0,0]
        };
    }
    componentWillMount() {
        setInterval(e => {
            this.tick();
        }, 1000);
    }
    tick() {
        const v = new Date();
        this.setState({
            time: [v.getHours(),v.getMinutes(),v.getSeconds()]
        });
    }
    render(){

        const z2 = (v) => {
            const s = "00" + v;
            return s.substr(s.length - 2, 2);
        };

        const name = "cry";

        const ampm = (a) => {
            let text;
            if (a > 12) {
                text = "오후";
            }
            else {
                text = "오전";
            }
            return text;
        };

        return (
            <Fragment>
                <h2>시계를 만들어보자!</h2>
                <p>{ampm(this.state.time[0])}:{z2(this.state.time[0] - 12)}:{z2(this.state.time[1])}:{z2(this.state.time[2])}</p>
            </Fragment>
        );
    }
}
export default Time;
