import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import './App.css';
import logo from '../img/DR-White.png';
// import { Card } from 'react-bootstrap';
import Cards from './Cards';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

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
                    <Container className="image">
                        <img className="logo" src={logo} alt=""/>
                    </Container>
                    <Container className="card-grid">
                        <Row className="card-row">
                            <Col xs={6} md={4}>
                                <Cards data={value}></Cards>
                            </Col>
                            <Col xs={6} md={4}>
                                <Cards data={value}></Cards>
                            </Col>
                            <Col xs={6} md={4}>
                                <Cards data={value}></Cards>
                            </Col>
                            <Col xs={6} md={4}>
                                <Cards data={value}></Cards>
                            </Col>
                            <Col xs={6} md={4}>
                                <Cards data={value}></Cards>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );

            ReactDOM.render(element, document.getElementById('root'));
        })
        return (
            <div className="container-fluid App">
                <Container className="image">
                    <img className="logo" src={logo} alt=""/>
                </Container>
                <Container className="card-grid">
                    <Row className="card-row">
                        <Col xs={6} md={4}>
                            <Cards data={-1}></Cards>
                        </Col>
                        <Col xs={6} md={4}>
                            <Cards data={-1}></Cards>
                        </Col>
                        <Col xs={6} md={4}>
                            <Cards data={-1}></Cards>
                        </Col>
                        <Col xs={6} md={4}>
                            <Cards data={-1}></Cards>
                        </Col>
                        <Col xs={6} md={4}>
                            <Cards data={-1}></Cards>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;