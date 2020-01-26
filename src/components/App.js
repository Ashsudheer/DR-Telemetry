import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import './App.css';
import logo from '../img/DR-White.png';
// import { Card } from 'react-bootstrap';
import Cards from './Cards';
import { CardDeck } from 'react-bootstrap';

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
            const element = (
                <div className="container-fluid App">
                    <div className="container-fluid image">
                        <img className="logo" src={logo} alt=""/>
                    </div>
                    {/* <Card className="card">
                        <Card.Body className="card-body">
                            <Card.Title className="card-text">Data</Card.Title>
                            <Card.Text className="card-text">
                                {value}
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                    <CardDeck>
                        <Cards data={value}></Cards>
                        <Cards data={value}></Cards>
                        <Cards data={value}></Cards>
                        <Cards data={value}></Cards>
                        <Cards data={value}></Cards>
                    </CardDeck>
                </div>
            );

            ReactDOM.render(element, document.getElementById('root'));
        })
        return (
            <div className="container-fluid App">
                <div className="container-fluid image">
                    <img className="logo" src={logo} alt=""/>
                </div>
                {/* <Card className="card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-text">Data</Card.Title>
                        <Card.Text className="card-text">

                        </Card.Text>
                    </Card.Body>
                </Card> */}
                <CardDeck>
                    <Cards data={-1}></Cards>
                    <Cards data={-1}></Cards>
                    <Cards data={-1}></Cards>
                    <Cards data={-1}></Cards>
                    <Cards data={-1}></Cards>
                </CardDeck>
            </div>
        );
    }
}

export default App;