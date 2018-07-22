import React, { Component } from 'react';
import axios from 'axios';

export default class MovieBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            listArr : []
        }
    }

    componentDidMount(){
        const _this = this;

        const date = new Date();
        const yy = date.getFullYear();
        const mm = ( '00' + (date.getMonth() + 1) ).substr(-2);
        const dd = ( '00' + (date.getDate() - 1) ).substr(-2);
        const ymd = yy + mm + dd;

        axios({
            method:'get',
            url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e05d6a1338548cd6874abc3d9a7c93ad&itemPerPage=5&targetDt=' + ymd
        })
        .then(function(response) {
            _this.setState({
                listArr : response.data.boxOfficeResult.dailyBoxOfficeList
            })
        });
    }

    render(){
        const items = this.state.listArr;

        const obj = items.map (
            (e) => {
                return (
                    <li key={e.rank}>
                        <p>{e.rank}위 &lt;{e.movieNm}&gt; 개봉일: {e.openDt}</p>
                        <p>전일 관객수: {e.audiCnt} / 누적 관객수: {e.audiAcc}</p>
                    </li>
                )
            }
        )


        return(
            <div className="section movie" >
                <h2>박스오피스</h2>
                <ul>{obj}</ul>
            </div>
        )
    }
}
