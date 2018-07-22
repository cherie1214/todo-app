import React from 'react';
import PropTypes from 'prop-types';

export default class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menu: this.props.menu
        };
    }


    componentWillReceiveProps (nextProps) {
        this.setState({
            menu: nextProps.menu
        });
    }

    setCount(id, val) {
        if(this.props.onCount) {
            this.props.onCount(id, val);
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
            <div className="half-box">
                <h3>메뉴판{this.props.title}</h3>
                <ul>{menuObj}</ul>
            </div>
        );
    }
}

Menu.propTypes = {
    title: PropTypes.string,
    menu: PropTypes.array,
    onCount: PropTypes.func
}

Menu.defaultProps = {
    title: 'this is default'
}
