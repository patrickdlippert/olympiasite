import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardItem, CardTitle } from 'reactstrap';
import ModalPop from './ModalPopComponent';

function RenderCard({item}) {
    return (
        <Card  style={{backgroundColor: 'rgb(173,151,81)'}} className="text-center">
            <CardImg className="p-1" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h3">{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <ModalPop />
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div id="home">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 align-items-center">
                            <img className="d-flex img-fluid" src="assets/images/topten2.png" alt="Olympia Logo" />
                            <h1 className="text-center">The absolute best of Olympia!</h1>
                        </div>
                        <div className="col m-1 py-5">
                            <RenderCard item={props.promotion} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;