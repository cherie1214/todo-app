import React from 'react';

export default class Basic extends React.Component {



    render(){

        const rt = () => {
            const r = Math.floor(Math.random() * 3);

            if (r == 0) return <p>좋은 하루 되세요</p>
            if (r == 1) return <p>안녕하세요</p>
            if (r == 2) return <p>날씨가 좋네요</p>
        }

        const tit = "기본을 공부해보자!"
        const txt = rt();

        return (
            <div>
                <h2>{tit}</h2>

                <div>{txt}</div>

            </div>
        );
    }
}
