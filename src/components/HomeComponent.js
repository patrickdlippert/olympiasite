import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card className="text-center">
            <CardImg className="p-2" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <Button>Enter Sweepstakes</Button>
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
                            <img className="d-flex img-fluid" src="assets/images/topten.png" alt="Olympia Logo" />
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