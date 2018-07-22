import React from 'react';
import update from 'react-addons-update';

import Menu from './Menu';
import Receipt from './Receipt';

export default class Cafe extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menu : [{
                    id : 1,
                    name : '아메리카노',
                    count : 0,
                    price : 3500
                },{
                    id : 2,
                    name : '바닐라라떼',
                    count : 0,
                    price : 4000
                },{
                    id : 3,
                    name : '캬라멜마끼아또',
                    count : 0,
                    price : 4500
                },{
                    id : 4,
                    name : '슈크림라떼',
                    count : 0,
                    price : 6100
                },{
                    id : 5,
                    name : '그린티프라푸치노',
                    count : 0,
                    price : 6300
                }]
        };
    }

    setCount(id, val){
        let count = this.state.menu[id-1].count + val;
        if (count < 0 ) count = 0;
        this.setState({
            menu : update(
                this.state.menu,
                {
                    [id-1]: {
                        count:{$set: count}
                    }
                }
            )
        });
    }

    render(){
        return(
            <div className="menuStyle ovh">
                <h2>메뉴를 만들어보자!</h2>
                <Menu
                    title="menu"
                    menu = {this.state.menu}
                    onCount = {(id, val) => {this.setCount(id, val)}}
                />
                <Receipt
                    title="receipt"
                    menu = {this.state.menu}
                />
            </div>
        )
    }
}
