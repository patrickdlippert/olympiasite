import React from 'react';
import { MDBAnimation } from "mdbreact";
import RatingStars from "./RatingStarsComponent";


function RenderGuideItem({attraction}) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}




function Guide(props) {

    const guide = props.attractions.map(attraction => {
        return (
            <div key={attraction.id} className="row row-content align-items-center">
                <RenderGuideItem attraction={attraction} />
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

export default Guide;