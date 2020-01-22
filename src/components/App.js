import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import './App.css';

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
            ReactDOM.render(<div className="output">{value}</div>, document.getElementById('root'));
        })
        return (
            <div className="container-fluid App">
                <div className="container-fluid image">
                    <img className="logo" src="../../public/img/DR-White.png" alt=""/>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Data</h5>
                        <div class="ouput">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;