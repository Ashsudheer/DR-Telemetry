import React from 'react';
import ReactDOM from 'react-dom';
// import socketIOClient from "socket.io-client";
import './App.css';
import logo from '../img/DR-White.png';
import { Card } from 'react-bootstrap';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
          endpoint: "http://localhost:4001",
          data: 0
        };
    }

    render() {
        // const socket = socketIOClient(this.state.endpoint);
        // socket.on('data', (value) => {
        //     this.setState({data: value})
        //     ReactDOM.render(<div className="output">{value}</div>, document.getElementById('root'));
        // })
        return (
            <div className="container-fluid App">
                <div className="container-fluid image">
                    <img className="logo" src={logo} alt=""/>
                </div>
                {/* <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Data</h5>
                        <div class="ouput">

                        </div>
                    </div>
                </div> */}
                <Card className="card">
                    <Card.Body className="card-body">
                        <Card.Title>Data</Card.Title>
                        {/* <div className="output">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </div> */}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default App;