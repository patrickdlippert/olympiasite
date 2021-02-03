import React, { Component } from 'react';
import { MDBAnimation } from "mdbreact";
import RatingStars from "./RatingStarsComponent";

class Guide extends Component {

    render() {
        const guide = this.props.attractions.map(attraction => {
            return (
                <div key={attraction.id} className="row row-content align-items-center">
                    <div className="col col-sm-8 order-sm-last">
                        <img src={attraction.image} alt={attraction.name} />
                        <p>Ave Rating: {attraction.rating} &nbsp;<RatingStars rating = {attraction.rating} />  
                        </p>
                    </div>

                    <div className="col-sm-4 text-left">
                        <MDBAnimation reveal type="zoomIn">
                        <h2>{attraction.name}</h2>
                        <p>{attraction.description}</p>
                        </MDBAnimation>
                    </div>

                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {guide}
                </div>
            </div>
        );
    }
}

export default Guide;