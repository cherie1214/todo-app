import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MovieList, MovieView } from './MovieComponents'

export default class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            listArr : [],
        };
    }

    componentDidMount(){
        this.getJson();
        // console.log("1")
    }

    getJson(nextState){
        // console.log("2")
        const _this = this;
        let limit = 10;

        axios({
            method:'get',
            url:'https://yts.am/api/v2/list_movies.json?limit=' + limit + '&sort_by=rating'
        })
        .then(function(response) {
            // console.log(response)
            _this.setState({
                listArr: response.data.data.movies
            });
        })
        .catch(err => console.log(err));
    }


    render(){
        return(
            <Router>
                <div className="section movie torrent">
                    <h2>Movie List-View from Router</h2>
                    <div>
                        <h3>영화 리스트</h3>
                        <Switch>
                            <Route exact={true} path='/components/Movie' render={()=> (
                                <MovieList info={this.state.listArr} />
                            )} />
                            <Route path='/components/Movie/:id' render={({match})=> (
                                <MovieView info={this.state.listArr} match={match}/>
                            )} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )

    }
}
