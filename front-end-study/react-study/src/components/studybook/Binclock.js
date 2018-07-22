import React from 'react';

export default class Binclock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time : [0, 0, 0]
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
            v = String("00" + v);
            return v.substr(v.length - 2, 2);
        };

        const hh = z2(this.state.time[0]);
        const mm = z2(this.state.time[1]);
        const ss = z2(this.state.time[2]);
        const binStr = hh + mm + ss;
        const style0 = { color: 'brown'};
        const style1 = { color: 'red'};
        const lines = [];

        for (let i = 0; i < binStr.length; i++){
            const v = parseInt(binStr.substr(i, 1));
            const bin = "0000" + v.toString(2);
            const bin8 = bin.substr(bin.length - 4, 4);


            for (let j = 0; j < bin8.length; j++){
                if (bin8.substr(j, 1) === '0'){
                    lines.push(<span style={style0}>○</span>)
                } else {
                    lines.push(<span style={style1}>●</span>)
                }
            }
            lines.push(<br />);
        }

        return (
            <div>
                <h2>바이너리 시계를 만들어보자!</h2>

                <div>{lines}</div>
            </div>
        );



    }
}
