import React from 'react';
import { MDBAnimation } from "mdbreact";
import RatingStars from "./RatingStarsComponent";
import CardCarousel from './CardCarouselComponent';


function AlternateHeaders({attraction}) {
    if ((attraction.id % 2)) {
        return (            
            <div className="col col-md-7 px-4 order-md-last">
                <img className="d-flex mr-3 img-fluid" src={attraction.image} alt={attraction.name} />
            </div>
        );
    }

    return (            
        <div className="col col-md-7 px-4">
            <img className="d-flex mr-3 img-fluid" src={attraction.image} alt={attraction.name} />
        </div>
    );
}

function RenderGuideItem({attraction}) {
    return (
        <React.Fragment>
            <AlternateHeaders attraction={attraction}/>

            <div className="col-md-5 text-left px-4">
                <MDBAnimation reveal type="zoomIn">
                    <h2>{attraction.name}</h2>
                    <h5>{attraction.date}</h5>
                    <p className="d-sm-block">Rating:&nbsp;<span className="text-danger">{attraction.rating}</span> &nbsp;<RatingStars rating = {attraction.rating}  />
                    &nbsp;&nbsp;&nbsp;{attraction.price} - {attraction.type}</p>
                    <p>{attraction.description}</p>
                    <p>Address: {attraction.address}</p>
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
        <>
        <div className="container">
            <div className="row">
                {guide}
            </div>
        </div>
        <CardCarousel resources={props.resources} />
        </>
    );

}

export default Guide;