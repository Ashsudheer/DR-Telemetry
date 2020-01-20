import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
          endpoint: "http://localhost:4001",
          data: 0
        };
    }

    render() {
        const socket = socketIOClient(this.state.endpoint);
        socket.on('data', (value) => {
            this.setState({data: value})
            ReactDOM.render(<div className="App">{this.state.data}</div>, document.getElementById('root'));
        })
        return (
            <div className="App">
                {this.state.data}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
