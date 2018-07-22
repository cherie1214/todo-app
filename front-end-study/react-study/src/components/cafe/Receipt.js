import React from 'react';

export default class Receipt extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menu: this.props.menu,
            total: 0
        };
    }

    componentWillReceiveProps (nextProps) {
        let sum = 0;
        for (let i=0; i < nextProps.menu.length; i++) {
            sum += nextProps.menu[i].count * nextProps.menu[i].price;
        }

        this.setState({
            menu: nextProps.menu,
            total: sum
        });
    }

    render(){
        const items = this.state.menu;

        const receiptObj = items.map (
            (e) => {
                if(e.count > 0){
                    return (
                        <li key={e.id}>
                            <span>{e.name}</span>
                            <span>X</span>
                            <span>{e.count}</span>
                            <span>=</span>
                            <span>{e.count * e.price}</span>
                        </li>
                    )
                }

            }
        )

        return(
            <div className="half-box">
                <h3>영수증</h3>

                <ul>{receiptObj}</ul>
                <p>total: {this.state.total}원</p>
            </div>
        );
    }


}
