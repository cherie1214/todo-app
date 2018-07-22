import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class User2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            users2 : [
                {id: 1, name: '강아지', info: '웹 개발 부서 개발자'},
                {id: 2, name: '아무개', info: '웹 개발 부서 기획자'},
                {id: 3, name: '홍길동', info: '웹 개발 부서 디자이너'}
            ]
        };
    }


    render(){
        return(
            <Router>
                <div className="section">
                    <h2>User2</h2>
                    <div>
                        <h3>사용자 리스트</h3>
                        <Switch>
                            <Route path='/components/User2/:id' render={({match})=> (
                                <UserCard users={this.state.users2} match={match}/>
                            )} />
                            <Route render={()=> (
                                <UserList users={this.state.users2}/>
                            )} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}



class UserList extends Component {
    render(){
        console.log(this.props.users)
        const ulist = this.props.users.map ( e => (
            <li key={e.id}>
                <Link to={'/components/User2/' + e.id}>
                    <div>
                        <p>{e.id}</p>
                        <p>{e.name}</p>
                    </div>
                </Link>
            </li>
        ))
        return (
            <ul>{ulist}</ul>
        )
    }
}

class UserCard extends Component {
    render(){
        console.log(this.props)
        const params = this.props.match.params;
        const id = parseInt(params.id, 10);
        const user = this.props.users.filter( e => e.id ===id )[0]

        return (
            <div>
                <div>{id}: {user.name} - {user.info}</div><br />
                <div><Link to='/components/User2'>뒤로 가기</Link></div>
            </div>
        )
    }
}
