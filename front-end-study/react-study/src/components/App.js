import React from 'react';

import Contact from './contacts';
import InchToCm from './inchToCm';
import Cafe from './cafe';
import Ref from './ref';
import Ajax from './ajax';

import Time from './studybook/Time';
import StopWatch from './studybook/StopWatch';
import Basic from './studybook/Basic';
import Binclock from './studybook/Binclock';
import Imgtxt from './studybook/Imgtxt';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
        };
    }

    render(){
        return (
            <div>
                <button onClick={()=> {this.setState({name: " Let's React.js Time!"});}}>Click Me</button>
                <h1 className="h1">Hello!!!!{this.state.name}</h1>

                <div className="section">
                    <Ajax/>
                </div>

                <div className="section">
                    <Ref/>
                </div>

                <div className="section">
                    <Contact/>
                </div>

                <div className="section">
                    <InchToCm/>
                </div>

                <div className="section">
                    <Cafe/>
                </div>



                <div className="section">
                    <Time/>
                </div>

                <div className="section">
                    <StopWatch/>
                </div>

                <div className="section">
                    <Basic/>
                </div>

                <div className="section">
                    <Binclock/>
                </div>

                <div className="section">
                    <Imgtxt/>
                </div>
            </div>
        );
    }
}
export default App;
