import React from 'react';
import axios from 'axios';

export default class Ajax extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options : [],
            code : null,
            name: null
        };
    }

    componentWillMount(){
        const _this = this;
        axios.get('/json/menu.json')
          .then(function (response) {
             let optionsArr = [];
             let dataArr = response.data;
             for (let i=0; i < dataArr.length; i++) {
                optionsArr.push({name: dataArr[i].name, code: dataArr[i].code});
             }
             _this.setState({
                 options : optionsArr
             });
          })
          .catch(function (error) {
             console.log(error);
          });
    }

    handleChange(e) {
        const t = e.target.options[e.target.selectedIndex].text;
        const n = t.split(' ')[0];
        const c = t.split(' ')[1];
        this.setState({
            code: c,
            name: n
        });

        console.log(c);
    }

    render(){
        const items = this.state.options;

        const obj = items.map (
            (e) => {
                return (
                    <option key={e.name} value={e.code}>{e.name} {e.code}</option>
                )

            }
        )

        return(
            <div>
                <h2>ajax를 배워보자!</h2>
                <select onChange={(e) => this.handleChange(e)}>
                    {obj}
                </select>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

Ajax.defaultProps = {
    options : [{name: '로딩 중입니다'}]
}
