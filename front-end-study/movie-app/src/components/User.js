import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const users = [
    {id: 1, name: '강아지', info: '웹 개발 부서 개발자'},
    {id: 2, name: '아무개', info: '웹 개발 부서 기획자'},
    {id: 3, name: '홍길동', info: '웹 개발 부서 디자이너'}
];   

const UserApp = () => (
    <Router>
        <div className="section">
            <h1>사용자 리스트</h1>
            <Switch>
                <Route path='/components/User/:id' component={UserCard} />
                <Route component={UserList} />
            </Switch>
        </div>
    </Router>
);

class UserList extends Component {
    render(){
        const ulist = users.map ( e => (
            <li key={e.id}>
                <Link to={'/components/User/' + e.id}>{e.name}</Link>
            </li>
        ))
        return (
            <ul>{ulist}</ul>
        )
    }
}

class UserCard extends Component {
    render(){
        const {params} = this.props.match;
        const id = parseInt(params.id, 10);
        const user = users.filter( e => e.id ===id )[0]
        
        return (
            <div>
                <div>{id}: {user.name} - {user.info}</div><br />
                <div><Link to='/components/User'>뒤로 가기</Link></div>
            </div>
        )
    }
}

export default UserApp;
