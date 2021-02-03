import React from 'react';
import { MDBAnimation } from "mdbreact";
import RatingStars from "./RatingStarsComponent";


function AlternateHeaders({attraction}) {
    if ((attraction.id % 2)) {
        return (            
            <div className="col col-md-7 order-sm-last">
                <img className="d-flex mr-3" src={attraction.image} alt={attraction.name} />
                <p>Ave Rating: {attraction.rating} &nbsp;<RatingStars rating = {attraction.rating} />  
                </p>
            </div>
        );
    }
    return (            
        <div className="col col-md-7">
            <img className="d-flex mr-3" src={attraction.image} alt={attraction.name} />
            <p>Ave Rating: {attraction.rating} &nbsp;<RatingStars rating = {attraction.rating} />  
            </p>
        </div>
    );
}

function RenderGuideItem({attraction}) {
    return (
        <React.Fragment>
            <AlternateHeaders attraction={attraction}/>

            <div className="col-md-5 text-left">
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