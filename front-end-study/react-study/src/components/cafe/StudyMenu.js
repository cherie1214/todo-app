import React from 'react';
import update from 'react-addons-update';

export default class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menu : [
                {
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
                }
            ],
            total : 0
        }
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
        })
    }

    shouldComponentUpdate(nextProps, nextState){


        if(JSON.stringify(nextState) != JSON.stringify(this.state)){
            let sum = 0;
            for (let i=0; i<nextState.menu.length; i++) {
                sum += nextState.menu[i].count * nextState.menu[i].price;
            }
            this.setState({
                total : sum
            })

            return true;
        }
        else {
            return false;
        }
    }
    render(){
        const items = this.state.menu;

        const menuObj = items.map (
            (e) => {
                return (
                    <li key={e.id}>
                        <span>{e.name}</span>
                        <span>{e.count}</span>
                        <span>
                            <button onClick={ () => {this.setCount(e.id, +1)} }>+</button>
                            <button onClick={ () => {this.setCount(e.id, -1)} }>-</button>
                        </span>
                    </li>
                )

            }
        )
        return(
            <div className="menuStyle">
                <h2>메뉴를 만들어보자!</h2>
                <ul>{menuObj}</ul>

                <p>Total: {this.state.total} 원</p>
            </div>
        )
    }

}
