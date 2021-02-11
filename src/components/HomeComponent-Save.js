import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { MDBAnimation } from "mdbreact";
import ModalPop from './ModalPopComponent';
import CardCarousel from './CardCarouselComponent';


function RenderCard({item}) {
    return (
        <Card style={{backgroundColor: 'rgb(173,151,81)'}} className="text-center">
            <CardImg className="p-1" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h3">{item.name}</CardTitle>
                <CardText className="text-light">{item.description}</CardText>
                <ModalPop />
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <>
        <div id="home">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 align-items-center">
                            <MDBAnimation reveal type="tada">
                                <img className="d-flex img-fluid" src="assets/images/topten.png" alt="Olympia Logo" />
                            </MDBAnimation>
                            <h1 className="text-center">The absolute best of Olympia!</h1>
                        </div>
                        <div className="col m-1 py-5">
                            <RenderCard item={props.promotion} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CardCarousel resources={props.resources} />
        </>
    );
}

export default Home;