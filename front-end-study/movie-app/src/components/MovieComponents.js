import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class MovieList extends Component {
    render(){
        const mlist = this.props.info.map ( (e, i) => (
            <li key={e.id}>
                <Link to={'/components/Movie/' + e.id}>
                    <div>
                        <p>{i + 1}위</p>
                        <p>{e.title}</p>
                        <img src={e.medium_cover_image} alt={'Poster of ' + e.title}/>
                    </div>
                </Link>
            </li>
        ))
        return (
            <ul>{mlist}</ul>
        )
    }
}

export class MovieView extends Component {

    render(){
        if(this.props.info.length === 0){
            return (
                <div> loading....</div>
            )
        }else{
            // console.log(this.props)
            const params = this.props.match.params;
            const id = parseInt(params.id, 10);
            let ranking = 0;
            let info = this.props.info.filter( (e, i) => {
                console.log(i);
                if(e.id === id){
                    ranking = i;
                    return true;
                }
            })[0];

            return (
                <div>
                    <div>
                        <p>{ranking + 1}위</p>
                        {id}: {info.title} - {info.summary}
                    </div>
                    <br />
                    <div><Link to='/components/Movie'>뒤로 가기</Link></div>
                </div>
            )
        }
    }
}
