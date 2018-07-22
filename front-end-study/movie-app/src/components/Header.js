import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <NavLink className="depth1" activeClassName="active" exact to="/">HOME</NavLink>
                <NavLink className="depth1" activeClassName="active" to='/components/MovieBox'>Box Office 5</NavLink>
                <NavLink className="depth1" activeClassName="active" to='/components/MovieTorrent'>Torrent Top 10</NavLink>
                <NavLink className="depth1" activeClassName="active" to='/components/Movie'>Movie List-View</NavLink>
                <NavLink className="depth1" activeClassName="active" to='/components/User'>User</NavLink>
                <NavLink className="depth1" activeClassName="active" to='/components/User2'>User2</NavLink>
            </div>
        )
    }

}
