import React from 'react';
import update from 'react-addons-update';

export default class Imgtxt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgInfo : [{
                id : 1,
                url : 'pic1',
                label : '사진1'
            }, {
                id : 2,
                url : 'pic2',
                label : '사진2'
            }, {
                id : 3,
                url : 'pic3',
                label : '사진3'
            }]
        };
    }


    render(){
        const boxStyle = {
            border: "1px solid #ccc",
            margin: "8px",
            padding: "4px"
        };

        const url = this.state.url;
        const src = './images/' + url + '.jpeg';


        const items = this.state.imgInfo;

        const itemsObj = items.map(
            (e) => {
                const url = e.url;
                const src = './images/' + url + '.jpeg';

                return (
                    <div style={boxStyle}>
                        <img key={e.label} src={src} width="128"/>
                        <label>{e.label}</label>
                    </div>
                );
            }
        );


        return(
            <div>
                <h2>이미지와 텍스트를 불러와보자!</h2>

                 <div>{itemsObj}</div>
            </div>
        );
    }
}
