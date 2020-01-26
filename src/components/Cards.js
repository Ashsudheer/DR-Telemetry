import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from "socket.io-client";
import { Card } from 'react-bootstrap';

class Cards extends React.Component{
    render(){
        return (
            <Card className="card">
                <Card.Body className="card-body">
                    <Card.Title className="card-text">Data</Card.Title>
                    <Card.Text className="card-text">
                        {this.props.data}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Cards;