import React, { Component } from 'react';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';

export default class MovieTorrent extends Component {
    constructor(props){
        super(props);
        this.state = {
            listArr : [],
            optionSort : 'like_count',
            optionOrder : 'desc'
        };
    }

    componentWillMount(){
        this.getJson();
    }

    getJson(nextState){
        const _this = this;
        let os = this.state.optionSort;
        if(nextState) os = nextState.optionSort;
        let oo = this.state.optionOrder;
        if(nextState) oo = nextState.optionOrder;
        let limit = 10;

        axios({
            method:'get',
            url:'https://yts.am/api/v2/list_movies.json?limit=' + limit + '&sort_by=' + os + '&order_by=' + oo
        })
        .then(function(response) {
            console.log(response);
            _this.setState({
                listArr: response.data.data.movies
            });
        })
        .catch(err => console.log(err));
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.optionSort !== this.state.optionSort || nextState.optionOrder !== this.state.optionOrder) {
            this.getJson(nextState);
            return true;
        }
        else if (nextState.listArr !== this.state.listArr) {
            return true;
        }
        return false;
    }


    handleChangeSort(e){
        const v = e.target.options[e.target.selectedIndex].value;
        this.setState({
            optionSort : v
        })
    }

    handleChangeOrder(e){
        const v = e.target.options[e.target.selectedIndex].value;
        this.setState({
            optionOrder : v
        })
    }

    render(){
        const items = this.state.listArr;

        const obj = items.map (
            (e, i) => {
                return(
                    <li key={e.id}>
                        <h3>{i+1}위 {e.title}</h3>
                        <p className="rating">{e.rating}</p>
                        <div><MovieSummary summary={e.summary}/></div>
                        <div className="img-box"><MoviePoster poster={e.medium_cover_image} title={e.title}/></div>
                    </li>
                )
            }
        )

        return(
            <div className="section movie torrent">
                <h2>토렌트 인기영화 순위</h2>
                <select onChange={ (e) => this.handleChangeSort(e) }>
                    <option value="like_count" seleted="true">선호도 순</option>
                    <option value="rating">평점 순</option>
                    <option value="download_count">다운로드 순</option>
                </select>
                <select onChange={ (e) => this.handleChangeOrder(e) }>
                    <option value="desc" seleted="true">내림차 순</option>
                    <option value="asc">오름차 순</option>
                </select>
                <ul>{obj}</ul>
            </div>
        )
    }
}



function MoviePoster({poster, title}){
    return(
        <img src={poster} alt={title + "'s Poster"}/>
    )
}

function MovieSummary({summary}){
    return(
        <LinesEllipsis
          text={summary}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
    )
}
