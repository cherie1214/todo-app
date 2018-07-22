import React from 'react';

import Message from './fluxComponent/Message';
import Name from './fluxComponent/Name';


export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1 className="h1">Redux STUDY</h1>
                <Message />
                <Name />
            </div>    
        );
    }
}
